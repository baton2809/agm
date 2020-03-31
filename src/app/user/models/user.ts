export interface User {
    id: number;
    firstName: string;
    lastName: string;
    mail: string;
    password: string;
}

export class Student implements User {
    id: number;
    firstName: string;
    lastName: string;
    mail: string;
    password: string;

    constructor(id: number, firstName: string, lastName: string, mail: string, password: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.password = password;
    }
}
