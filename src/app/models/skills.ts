export interface Skills {
    list: Skill[];
}

export interface Skill{
    name: string;
    proficiency: number;
    image: string;
    experience: string;
    tags:string[];
    description: string;
}