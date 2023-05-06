import { Credentials, NewCredentials, UUID } from '@/types/credentials';
import * as OTPAuth from "otpauth";
import { v4 as uuidv4 } from 'uuid';

export async function readAllCredentials(): Promise<Credentials[]> {
  return new Promise((resolve, reject) => {
      chrome.storage.local.get(null, (items) => {
          if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
          } else {
              const credentials = Object.values(items) as Credentials[];
              resolve(credentials);
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

export async function createCredential(credential: NewCredentials): Promise<Credentials> {
  const id = uuidv4();
  const newCredential: Credentials = { ...credential, id };
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
  const { id } = credential;

  return new Promise((resolve, reject) => {
      chrome.storage.local.set({ [id]: credential }, () => {
          if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
          } else {
              resolve(credential);
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

export function generateTOTP(secret: string, interval = 30, digits = 6): string {
  // Create a new TOTP object.
  const totp = new OTPAuth.TOTP({
    issuer: "",
    label: "",
    algorithm: "SHA1",
    digits: digits,
    period: interval,
    secret: secret,
  });

  // Generate a token (returns the current token as a string).
  const token = totp.generate();

  return token;
}