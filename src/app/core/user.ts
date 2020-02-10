export interface User {
    id: number;
    firstName: string;
    lastName: string;
}

export class Student implements User {
    id: number;   
    firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}