export interface Event {
    createdDate: Date;
    lastModifiedDate: Date;
}

export interface QueryEvent extends Event {
    queryString: string;
}

