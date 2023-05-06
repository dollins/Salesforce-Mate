export * from './credentials';
// UUID is string, however this might help to debug as only UUID is valid
export type UUID = string;

export type OrgType = 'Prod' | 'Test';
// Only when you are creating the credentials there is not Id attribute
export interface NewCredentials {
    username: string;
    password: string;
    TOTPSecret: string;
    randomSalt: string;
    clientId: string;
    clientSecret: string;
    secretToken: string;
    sessionId: string;
    refreshToken: string;
    jwt: string;
    orgType: OrgType;
    orgName: string;
    apiVersionActive: number;
    apiDefaultVersion: number;
    createdDate: Date;
    lastModifiedDate: Date;
}
// For any manipulation the UUID is used.
export interface Credentials extends NewCredentials {
    id: UUID;
}

