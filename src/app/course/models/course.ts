export interface Course {
    id: number;
    title: string;
    creationDate: string;
    duration: string;
    description: string;
}

export class AngularCourse implements Course {
    id: number;
    title: string;
    creationDate: string;
    duration: string;
    description: string;

    constructor(
        id: number,
        title: string,
        creationDate: string,
        duration: string,
        description: string) {

        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.duration = duration;
        this.description = description;
    }
}
