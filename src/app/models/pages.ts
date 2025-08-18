export interface Pages {
    about:Page;
    contact:Page;
    articles:Page;
    portfolio:Page;
    resume:Page;
    library:Page;
    services:Page;
    skills:Page;
    stats:Page;
    testimonials:Page;
}

export interface Page {
    order:number;
    name:string;
    icon:string
    enabled:boolean;
    menu:boolean;
}

export const components: Pages = {
    "about" : { order: 1, name: "About", icon: "fas fa-id-card", enabled: true, menu: true },
    "stats" : { order: 2, name: "Stats", icon: "fas fa-chart-area", enabled: true, menu: false },
    "resume" : { order: 3, name: "Resume", icon: "fas fa-terminal", enabled: true, menu: true },
    "articles" : { order: 4, name: "Articles", icon: "fas fa-lightbulb", enabled: true, menu: true },
    "portfolio" : { order: 5, name: "Portolio", icon: "fas fa-lightbulb", enabled: false, menu: true },
    "skills" : { order: 6, name: "Skills", icon: "fas fa-code", enabled: true, menu: true },
    "library" : { order: 7, name: "Library", icon: "fas fa-book", enabled: true, menu: true },
    "services" : { order: 8, name: "Services", icon: "fas fa-book", enabled: false, menu: true },
    "testimonials" : { order: 9, name: "Testimonials", icon: "fas fa-quote-left", enabled: false, menu: true },
    "contact" : { order: 10, name: "Contact", icon: "fas fa-envelope", enabled: true, menu: true },
  };