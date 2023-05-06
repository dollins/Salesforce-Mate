import { Credentials } from '@/types/credentials';
import * as OTPAuth from "otpauth";


export function logCredentials(credentials: Credentials): void {
  console.log(`Username: ${credentials.username}`);
  console.log(`Password: ${credentials.password}`);
}

export function logMessage(message: string): void {
  console.log(`Shared Module: ${message}`);
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