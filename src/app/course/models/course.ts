export interface Course {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;
}

export class AngularCourse implements Course {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;

    constructor(
        id: number,
        title: string,
        creationDate: Date,
        duration: number,
        description: string,
        topRated: boolean) {

        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.duration = duration;
        this.description = description;
        this.topRated = topRated;
    }
}
