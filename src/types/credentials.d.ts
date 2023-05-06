export * from './credentials';

type OrgType = 'Prod' | 'Test';
export interface Credentials {
    id: string;
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
