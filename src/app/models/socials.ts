export interface Socials {
    list:Social[];
}

export interface Social{
    name: string;
    url: string;
    icon: string;
    enabled: boolean;
}

export const socials: Socials = {
    list: [
      { name: "Facebook", url: "https://www.facebook.com/jmperezg", icon: "fa-brands fa-facebook", enabled: false },
      { name: "Twitter", url: "https://twitter.com/jmperezg", icon: "fa-brands fa-twitter", enabled: false },
      { name: "Instagram", url: "https://www.instagram.com/jmperezg", icon: "fa-brands fa-instagram", enabled: false },
      { name: "Linkedin", url: "https://www.linkedin.com/in/jmperezg", icon: "fa-brands fa-linkedin", enabled: false },
      { name: "Github", url: "", icon: "fa-brands fa-github", enabled: false },
      { name: "Gitlab", url: "", icon: "fa-brands fa-gitlab", enabled: false },
    ]
  };