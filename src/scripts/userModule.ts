const UserFields = {
    Id: "Id",
    FirstName: "FirstName",
    LastName: "LastName",
    Email: "Email",
    Username: "Username",
    ProfileId: "ProfileId",
    UserRoleId: "UserRoleId",
    IsActive: "IsActive",
    Alias: "Alias",
    TimeZoneSidKey: "TimeZoneSidKey",
    LocaleSidKey: "LocaleSidKey",
    EmailEncodingKey: "EmailEncodingKey",
    LanguageLocaleKey: "LanguageLocaleKey",
    EmployeeNumber: "EmployeeNumber",
    LastLoginDate: "LastLoginDate",
    LastPasswordChangeDate: "LastPasswordChangeDate",
    CreatedDate: "CreatedDate",
    CreatedById: "CreatedById",
    LastModifiedDate: "LastModifiedDate",
    LastModifiedById: "LastModifiedById",
    SystemModstamp: "SystemModstamp"
};

export function queryCurrentUser(sessionId: string, instanceUrl: string, apiVersion: string): Promise<any> {
    const headers = { Authorization: `Bearer ${sessionId}` };
    const url = `${instanceUrl}/services/oauth2/userinfo`;
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        for (const [key, value] of Object.entries(headers)) {
            xhr.setRequestHeader(key, value);
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    const username = response.preferred_username;
                    const queryUrl = `${instanceUrl}/services/data/v${apiVersion}/query?q=SELECT+${Object.keys(
                        UserFields
                    ).join()}+FROM+User+WHERE+Username='${username}'`;
                    const queryXhr = new XMLHttpRequest();
                    queryXhr.open("GET", queryUrl);
                    for (const [key, value] of Object.entries(headers)) {
                        queryXhr.setRequestHeader(key, value);
                    }
                    queryXhr.onreadystatechange = () => {
                        if (queryXhr.readyState === XMLHttpRequest.DONE) {
                            if (queryXhr.status === 200) {
                                const queryResponse = JSON.parse(queryXhr.responseText);
                                resolve(queryResponse);
                            } else {
                                const error = new Error(`Error querying User table: ${queryXhr.statusText}`);
                                console.error(error);
                                reject(error);
                            }
                        }
                    };
                    queryXhr.send();
                } else {
                    const error = new Error(`Error retrieving current user information: ${xhr.statusText}`);
                    console.error(error);
                    reject(error);
                }
            }
        };
        xhr.send();
    });
}
