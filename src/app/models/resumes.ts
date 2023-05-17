export interface Resumes {

    list: Resume[];

}

export interface Resume {

    title:string;
    start:number;
    end?:number;
    location:string;
    descriptions:string[];

}

