export interface Portfolios {

    list: Portfolio[];

}

export interface Portfolio {

    id?:number;
    languages?:string[];
    name: string;
    description: string;
    image:string;
    link?:string;
    tags:string[];

}