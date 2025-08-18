export interface Articles {

    list: Article[];

}

export interface Article {

    id?:number;
    languages?:string[];
    alias: string;
    name: string;
    resume?:string;
    content?: string;
    image:string;
    link?:string;
    tags:string[];

}

export const articles: Articles = {
  list: [
    {
      alias: "how-not-to-use-scrum",
      name: "How NOT to use Scrum",
      resume: "Common mistakes and best practices when applying the Scrum framework in agile teams.",
      languages: ["English"],
      image: "https://media.licdn.com/dms/image/v2/D4D12AQGPtsQl-unLkQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1721199239507?e=2147483647&v=beta&t=eh8Nj53grVlzkktsFC8Z48UJIWS3tLaW9GwLkKdi3CE",
      link: "https://www.linkedin.com/pulse/como-usar-scrum-jose-miguel-p%C3%A9rez-ganado-ridvf",
      tags: ["Scrum", "Agile", "Project Management"],
      content: `
        <p>
          Scrum is an agile framework used to manage complex projects. Although it was initially developed for software projects, its flexibility has made it applicable to many industries.
        </p>
        <p>
          Scrum focuses on incremental delivery and collaboration, with well-defined roles, events, and artifacts. However, poor understanding or misuse can turn Scrum into an obstacle rather than an enabler.
        </p>

        <h2 id="pros-cons">Pros and Cons</h2>
        ...
        <h2 id="common-mistakes">Common Mistakes</h2>
        ...
        <h2 id="scheduling">Scheduling</h2>
        ...
        <h2 id="conclusions">Conclusions</h2>
      `
    },
    {
      alias: "microservices-containers-orchestration",
      name: "Microservices Orchestration",
      resume: "Why containers and orchestration are essential pillars for scaling and managing microservices.",
      languages: ["English"],
      image: "https://media.licdn.com/dms/image/v2/D4D12AQGUoyIiPJVVeg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1716274267714?e=2147483647&v=beta&t=TTrc9YTT9q_ZVsEbTQfcrzglhS0Qwlkm1peAfarsgmI", 
      link: "https://www.linkedin.com/pulse/orquestaci%C3%B3n-de-microservicios-jose-miguel-p%C3%A9rez-ganado-rj2ef",
      tags: ["Microservices", "Containers", "Kubernetes", "Architecture"],
      content: `
        <h1 id="introduction">Introduction</h1>
        <p>
          In today’s digital era, where speed and adaptability are essential for business success, containers and orchestration have become the backbone of modern software architectures.
        </p>
        ...
        <h1 id="why-containers">Why Use Containers in Microservices?</h1>
        ...
        <h1 id="platforms">Container Orchestration Platforms</h1>
        ...
        <h1 id="choose-platform">How to Choose the Best Platform?</h1>
        ...
        <h1 id="conclusion">Conclusion</h1>
      `
    },
    {
      alias: "software-testing-quality-stability",
      name: "Software Testing: Quality and Stability",
      resume: "Strategies to ensure quality, stability, and security in modern software development.",
      languages: ["English"],
      image: "https://media.licdn.com/dms/image/v2/D4D12AQGbLu7IK31ZZQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714640324354?e=2147483647&v=beta&t=H6CpInkMH6JAS__NoZdHRrEY7uedg_Zji4MpWQlva2g",
      link: "https://www.linkedin.com/pulse/pruebas-de-software-garantizando-calidad-y-jose-miguel-p%C3%A9rez-ganado-lktaf",
      tags: ["Testing", "QA", "Quality Assurance", "Automation"],
      content: `
        <p>
          In software development, new features often take the spotlight. But a strong testing strategy is vital to ensure long-term stability and quality across the ecosystem.
        </p>
        <h2 id="types">What Types of Tests Exist?</h2>
        ...
        <h2 id="conclusion">Conclusion</h2>
      `
    },
    {
      alias: "innovation-strategy-not-always-best",
      name: "Innovation Is Not Always the Best Option",
      resume: "Why innovation without strategy can harm long-term sustainability and business value.",
      languages: ["English"],
      image: "https://media.licdn.com/dms/image/v2/D4D12AQEKQC4VK9noZQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710323490986?e=1760572800&v=beta&t=KTcVQmjVOkCYYOi0FLVhIpP1YnKQoUSsbLlJ7t1wOhM",
      link: "https://www.linkedin.com/pulse/la-innovaci%C3%B3n-siempre-es-mejor-opci%C3%B3n-jose-miguel-p%C3%A9rez-ganado-dntef",
      tags: ["Innovation", "Strategy", "Open Source", "Sustainability"],
      content: `
        <p>
          In the fast-paced world of technology, every new development promises to be the key to the future. But not all innovations succeed in practice, especially when rushed.
        </p>
        ...
        <h2 id="conclusion">Conclusion</h2>
      `
    },
    {
      alias: "microservices-synchronization-communication",
      name: "Digital Age: Orchestration and Synchronization",
      resume: "Microservices: their advantages, challenges, and communication mechanisms for success.",
      languages: ["English"],
      image: "https://media.licdn.com/dms/image/v2/D4D12AQG8nS7a7_1lYA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713792116870?e=1760572800&v=beta&t=ni6swS5wGT1gokiz9cgx6NszNzYxo0WzW9a1kdjsZbs",
      link: "https://www.linkedin.com/pulse/microservicios-orquestaci%C3%B3n-y-sincronizaci%C3%B3n-en-la-era-p%C3%A9rez-ganado-znlkf",
      tags: ["Microservices", "Architecture", "Communication", "Scalability"],
      content: `
        <p>
          At the forefront of modern IT, microservices have become the preferred architecture for digital transformation. Yet they come with important considerations.
        </p>
        <h2 id="what">What Are Microservices?</h2>
        ...
        <h2 id="advantages">Advantages of Microservices</h2>
        ...
        <h2 id="challenges">Challenges of Microservices</h2>
        ...
        <h2 id="communication">Communication Mechanisms</h2>
        ...
        <h2 id="conclusion">Conclusion</h2>
      `
    }
  ]
};