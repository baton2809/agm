export interface Course {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
}

export class AngularCourse implements Course {
    id: number;    
    title: string;
    creationDate: Date;
    duration: number;
    description: string;

    constructor(id: number, 
        title: string, 
        creationDate: Date, 
        duration: number, 
        description: string) {

            this.id = id;
            this.title= title;
            this.creationDate = creationDate;
            this.duration = duration
            this.description = description;
        
    }
        
}