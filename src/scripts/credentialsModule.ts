import { Credentials } from '@/types/credentials';

export function logCredentials(credentials: Credentials): void {
  console.log(`Username: ${credentials.username}`);
  console.log(`Password: ${credentials.password}`);
}

export function logMessage(message: string): void {
  console.log(`Shared Module: ${message}`);
}