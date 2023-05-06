import { Credential, NewCredential, OrgType } from "@/types/credentials";
import {
    createCredential,
    readAllCredentials,
    updateCredential,
    deleteCredentialById,
    deleteAllCredentials
} from "@/scripts/credentialsModule";

const newCredential: NewCredential = {
    username: "testUsername",
    password: "testPassword",
    TOTPSecret: "testTOTPSecret",
    randomSalt: "testRandomSalt",
    clientId: "testClientId",
    clientSecret: "testClientSecret",
    secretToken: "testSecretToken",
    sessionId: "testSessionId",
    refreshToken: "testRefreshToken",
    jwt: "testJwt",
    orgType: "Test" as OrgType,
    orgName: "testOrgName",
    apiVersionActive: 1,
    apiDefaultVersion: 1,
    createdDate: new Date(),
    lastModifiedDate: new Date()
};

function testCreate() {
    createCredential(newCredential)
        .then((createdCredential) => {
            console.log("Created credential:", createdCredential);
        })
        .catch((error) => {
            console.error("Error while testing create:", error);
        });
}

function testReadAll() {
    readAllCredentials()
        .then((allCredentials) => {
            console.log("All credentials:", allCredentials);
        })
        .catch((error) => {
            console.error("Error while testing readAll:", error);
        });
}

function testUpdate() {
    createCredential(newCredential)
        .then((createdCredential) => {
            const updatedCredential: Credential = {
                ...createdCredential,
                username: "updatedUsername",
                password: "updatedPassword"
            };

            return updateCredential(updatedCredential);
        })
        .then((updatedResult) => {
            console.log("Updated credential:", updatedResult);
        })
        .catch((error) => {
            console.error("Error while testing update:", error);
        });
}

function testDeleteById() {
    createCredential(newCredential)
        .then((createdCredential) => {
            return deleteCredentialById(createdCredential.id);
        })
        .then(() => {
            console.log("Deleted credential successfully");
        })
        .catch((error) => {
            console.error("Error while testing deleteById:", error);
        });
}

function testDeleteAll() {
    createCredential(newCredential)
        .then(() => {
            return deleteAllCredentials();
        })
        .then(() => {
            console.log("Deleted all credentials successfully");
        })
        .catch((error) => {
            console.error("Error while testing deleteAll:", error);
        });
}

export function runCredentials_test() {
    // Run the tests
    testCreate();
    testReadAll();
    testUpdate();
    testDeleteById();
    testDeleteAll();
}
