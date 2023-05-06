import { Credentials, NewCredentials, UUID } from "@/types/credentials";
import * as OTPAuth from "otpauth";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

export function encrypt(plaintext: string, salt: string, passphrase = ''): string {
    const key = CryptoJS.PBKDF2(passphrase, CryptoJS.enc.Hex.parse(salt), {
        keySize: 256 / 32,
        iterations: 10000
    });
    const iv = CryptoJS.lib.WordArray.random(128 / 8);
    const encrypted = CryptoJS.AES.encrypt(plaintext, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return iv.toString() + encrypted.toString();
}

export function decrypt(ciphertext: string, salt: string, passphrase = ''): string {
    const iv = CryptoJS.enc.Hex.parse(ciphertext.substring(0, 32));
    const encrypted = ciphertext.substring(32);
    const key = CryptoJS.PBKDF2(passphrase, CryptoJS.enc.Hex.parse(salt), {
        keySize: 256 / 32,
        iterations: 10000
    });
    const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

export async function readAllCredentials(): Promise<Credentials[]> {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(null, (items) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                const credentials = Object.values(items) as Credentials[];

                // Decrypt the password for each credential
                const decryptedCredentials = credentials.map((credential) => {
                    const { password, randomSalt, ...rest } = credential;
                    return {
                        ...rest,
                        password: decrypt(password, randomSalt),
                        randomSalt
                    };
                });

                resolve(decryptedCredentials);
            }
        });
    });
}

export async function createCredential(credential: NewCredentials): Promise<Credentials> {
    const id = uuidv4();
    const randomSalt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
    const { password, ...rest } = credential;
    const newCredential: Credentials = {
        ...rest,
        id,
        password: encrypt(password, randomSalt),
        randomSalt
    };
    return new Promise((resolve, reject) => {
        chrome.storage.local.set({ [id]: newCredential }, () => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(newCredential);
            }
        });
    });
}

export async function updateCredential(credential: Credentials): Promise<Credentials> {
    const { id, password, randomSalt, ...rest } = credential;
    const updatedCredential: Credentials = {
        ...rest,
        id,
        password: encrypt(password, randomSalt),
        randomSalt
    };
    return new Promise((resolve, reject) => {
        chrome.storage.local.set({ [id]: updatedCredential }, () => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(updatedCredential);
            }
        });
    });
}

export async function deleteCredentialById(id: UUID): Promise<void> {
    return new Promise((resolve, reject) => {
        chrome.storage.local.remove(id, () => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve();
            }
        });
    });
}

export async function deleteAllCredentials(): Promise<void> {
    return new Promise((resolve, reject) => {
        readAllCredentials().then((allCredentials) => {
            const idsToDelete = allCredentials.map((credential) => credential.id);
            chrome.storage.local.remove(idsToDelete, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            });
        });
    });
}

export function generateTOTP(secret: string, interval = 30, digits = 6): string {
    // Create a new TOTP object.
    const totp = new OTPAuth.TOTP({
        issuer: "",
        label: "",
        algorithm: "SHA1",
        digits: digits,
        period: interval,
        secret: secret
    });

    // Generate a token (returns the current token as a string).
    const token = totp.generate();

    return token;
}
