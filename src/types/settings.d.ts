export interface Setting {
    masterPassword: string; // Master passwords for all passwords encryption
    randomSalt: string; // Random salt to not save plain password also to not find it in hash table if week
    darkMode: boolean; // Dark mode as the first UI option
    locale: string; // Since the begining the application will be translated
    defaultAPIVersion: number;
}