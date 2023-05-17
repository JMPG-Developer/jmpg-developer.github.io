export interface Pages {

    about:Page;
    contact:Page;
    portfolio:Page;
    resume:Page;
    library:Page;
    skills:Page;
    stats:Page;
    testimonials:Page;

}

export interface Page {

    order:number;
    name:string;
    icon:string
    enabled:boolean;

}