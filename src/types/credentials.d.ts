export * from './credentials';

type OrgType = 'Prod' | 'Test';
export interface Credentials {
    id: String;
    username: String;
    password: String;
    randomSalt: String;
    clientId: String;
    clientSecret: String;
    secretToken: String;
    sessionId: String;
    refreshToken: String;
    jwt: String;
    orgType: OrgType;
    orgName: String;
    apiVersionActive: Number;
    apiDefaultVersion: Number;
    createdDate: Date;
    lastModifiedDate: Date;
}
