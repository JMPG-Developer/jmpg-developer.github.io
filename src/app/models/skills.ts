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

export const skills: Skills = {
    list: [
      { 
        "name": "Angular", 
        "proficiency": 4.5, 
        "image": "devicon-angular-plain", 
        "experience": "5+ years",
        "tags": ["Frontend", "Framework"],
        "description": "Developed scalable and maintainable SPAs and PWAs using Angular, leveraging modular architecture, standalone components, RxJS, and SSR for SEO optimization."
      },
      { 
        "name": "VueJS", 
        "proficiency": 4.5, 
        "image": "devicon-vuejs-plain", 
        "experience": "5+ years",
        "tags": ["Frontend", "Framework"],
        "description": "Built modern, high-performance web applications with Vue.js, utilizing Composition API and Vuex for state management in scalable frontend architectures."
      },
      { 
        "name": "NodeJS", 
        "proficiency": 4, 
        "image": "devicon-nodejs-plain", 
        "experience": "2+ years",
        "tags": ["Backend", "Framework"],
        "description": "Designed and implemented RESTful APIs and microservices with Node.js, focusing on scalability, event-driven architecture, and real-time applications with WebSockets."
      },
      { 
        "name": "Java", 
        "proficiency": 5, 
        "image": "devicon-java-plain", 
        "experience": "15+ years",
        "tags": ["Backend", "Language"],
        "description": "Developed enterprise-grade applications, optimizing performance and scalability. Extensive experience with multithreading, JVM tuning, and high-throughput systems."
      },
      { 
        "name": "Apache Kafka", 
        "proficiency": 4.5, 
        "image": "devicon-apachekafka-plain", 
        "experience": "6+ years",
        "tags": ["Event-Driven"],
        "description": "Designed real-time data pipelines and event-driven architectures using Kafka, optimizing message processing and stream analytics for high-availability systems."
      },
      { 
        "name": "Apache Flink", 
        "proficiency": 2.5, 
        "image": "devicon-apache-plain", 
        "experience": "3+ years",
        "tags": ["Event-Driven"],
        "description": "Implemented real-time data processing with Apache Flink, optimizing stream analytics and event-driven architectures for high-velocity data flows."
      },
      { 
        "name": "RabbitMQ", 
        "proficiency": 3.5, 
        "image": "devicon-rabbitmq-plain", 
        "experience": "3+ years",
        "tags": ["Event-Driven"],
        "description": "Implemented RabbitMQ for asynchronous messaging and distributed event processing, improving scalability and decoupling in microservices."
      },
      { 
        "name": ".NET", 
        "proficiency": 4, 
        "image": "devicon-dot-net-plain", 
        "experience": "5+ years",
        "tags": ["Backend", "Framework"],
        "description": "Built high-performance APIs and enterprise applications with .NET, leveraging dependency injection, async programming, and cloud integration with Azure."
      },
      { 
        "name": "Hibernate", 
        "proficiency": 5, 
        "image": "devicon-hibernate-plain", 
        "experience": "10+ years",
        "tags": ["ORM"],
        "description": "Optimized database operations using Hibernate, implementing efficient query strategies, caching mechanisms, and seamless database migrations with JPA."
      },
      { 
        "name": "JPA", 
        "proficiency": 5, 
        "image": "devicon-hibernate-plain", 
        "experience": "10+ years",
        "tags": ["ORM"],
        "description": "Designed and optimized entity relationships with JPA, ensuring efficient database interactions and seamless ORM integration with Java applications."
      },
      { 
        "name": "Doctrine", 
        "proficiency": 3, 
        "image": "devicon-doctrine-plain", 
        "experience": "5+ years",
        "tags": ["ORM"],
        "description": "Implemented Doctrine ORM in PHP projects, improving database interactions, performance optimization, and data persistence management."
      },
      { 
        "name": "Eloquent", 
        "proficiency": 2.5, 
        "image": "devicon-php-plain", 
        "experience": "7+ years",
        "tags": ["ORM"],
        "description": "Used Eloquent ORM in Laravel-based projects, simplifying database queries and ensuring efficient relational data handling."
      },
      { 
        "name": "Entity Framework", 
        "proficiency": 3.5, 
        "image": "devicon-dot-net-plain", 
        "experience": "10+ years",
        "tags": ["ORM"],
        "description": "Optimized database access using Entity Framework in .NET applications, implementing LINQ and improving query performance."
      },
      { 
        "name": "JavaScript", 
        "proficiency": 5, 
        "image": "devicon-javascript-plain", 
        "experience": "10+ years",
        "tags": ["Frontend", "Language"],
        "description": "Developed full-stack applications with JavaScript, utilizing modern ES6+ features, asynchronous programming, and performance optimizations."
      },
      { 
        "name": "PHP", 
        "proficiency": 5, 
        "image": "devicon-php-plain", 
        "experience": "10+ years",
        "tags": ["Language"],
        "description": "Developed dynamic web applications using PHP, optimizing backend logic and integrating secure authentication and API connectivity."
      },
      { 
        "name": "C#", 
        "proficiency": 4, 
        "image": "devicon-csharp-plain", 
        "experience": "10+ years",
        "tags": ["Language"],
        "description": "Built enterprise-grade applications with C#, implementing multithreading, dependency injection, and cloud-based architectures with .NET."
      },
      { 
        "name": "Visual Basic", 
        "proficiency": 4.5, 
        "image": "devicon-visualbasic-plain", 
        "experience": "10+ years",
        "tags": ["Language"],
        "description": "Maintained and modernized legacy applications written in Visual Basic, integrating them with newer technologies to enhance performance."
      },
      { 
        "name": "Jenkins", 
        "proficiency": 5, 
        "image": "devicon-jenkins-plain", 
        "experience": "10+ years",
        "tags": ["DevOps"],
        "description": "Automated build and deployment pipelines using Jenkins, integrating with CI/CD workflows for seamless software delivery."
      },
      { 
        "name": "Elasticsearch", 
        "proficiency": 4, 
        "image": "devicon-elasticsearch-plain", 
        "experience": "5+ years",
        "tags": ["DevOps"],
        "description": "Implemented Elasticsearch for real-time search and analytics, optimizing indexing strategies, query performance, and distributed search architectures."
      },
      { 
        "name": "Kibana", 
        "proficiency": 4, 
        "image": "devicon-kibana-plain", 
        "experience": "5+ years",
        "tags": ["DevOps"],
        "description": "Configured Kibana dashboards for monitoring logs and metrics, integrating with Elasticsearch to visualize and analyze structured data efficiently."
      },
      { 
        "name": "Grafana", 
        "proficiency": 4, 
        "image": "devicon-grafana-plain", 
        "experience": "5+ years",
        "tags": ["DevOps"],
        "description": "Deployed Grafana for real-time monitoring and alerting, integrating with Prometheus, Elasticsearch, and cloud platforms for observability and performance tracking."
      },
      { 
        "name": "Github Actions", 
        "proficiency": 5, 
        "image": "devicon-githubactions-plain", 
        "experience": "10+ years",
        "tags": ["DevOps"],
        "description": "Developed and maintained CI/CD workflows using GitHub Actions, automating testing, deployment, and infrastructure provisioning."
      },
      { 
        "name": "Kubernetes", 
        "proficiency": 4.5, 
        "image": "devicon-kubernetes-plain", 
        "experience": "6+ years",
        "tags": ["DevOps"],
        "description": "Automated application deployment, scaling, and management using Kubernetes, implementing CI/CD pipelines and ensuring high-availability cloud architectures."
      },
      { 
        "name": "Spring", 
        "proficiency": 5, 
        "image": "devicon-spring-plain", 
        "experience": "15+ years",
        "tags": ["Backend", "Framework"],
        "description": "Designed and implemented microservices architectures with Spring Boot, optimizing performance through caching, circuit breakers, and distributed tracing."
      },
      { 
        "name": "Laravel", 
        "proficiency": 5, 
        "image": "devicon-laravel-plain", 
        "experience": "8+ years",
        "tags": ["Framework"],
        "description": "Developed scalable web applications using Laravel, leveraging Eloquent ORM, MVC architecture, and Blade templating for maintainability."
      },
      { 
        "name": "CodeIgniter", 
        "proficiency": 4, 
        "image": "devicon-codeigniter-plain", 
        "experience": "6+ years",
        "tags": ["Framework"],
        "description": "Built lightweight PHP applications with CodeIgniter, focusing on performance optimization, modular design, and rapid API development."
      },
      { 
        "name": "Symfony", 
        "proficiency": 3.5, 
        "image": "devicon-symfony-plain", 
        "experience": "5+ years",
        "tags": ["Framework"],
        "description": "Implemented Symfony for enterprise-grade PHP applications, utilizing its reusable components and dependency injection for scalable architecture."
      },
      { 
        "name": "Blazor", 
        "proficiency": 3, 
        "image": "devicon-dotnetcore-plain", 
        "experience": "3+ years",
        "tags": ["Framework"],
        "description": "Built interactive web applications with Blazor, leveraging WebAssembly and C# for frontend development in .NET projects."
      },
      { 
        "name": "TypeScript", 
        "proficiency": 4, 
        "image": "devicon-typescript-plain", 
        "experience": "5+ years",
        "tags": ["Frontend", "Language"],
        "description": "Developed scalable front-end applications with TypeScript, ensuring type safety, better maintainability, and robust architecture in Angular and Node.js projects."
      },
      { 
        "name": "Docker", 
        "proficiency": 4.5, 
        "image": "devicon-docker-plain", 
        "experience": "8+ years",
        "tags": ["DevOps"],
        "description": "Containerized applications with Docker, improving deployment consistency, optimizing image sizes, and orchestrating microservices environments."
      },
      { 
        "name": "PostgreSQL", 
        "proficiency": 5, 
        "image": "devicon-postgresql-plain", 
        "experience": "10+ years",
        "tags": ["Database"],
        "description": "Designed and optimized relational databases with PostgreSQL, implementing indexing strategies, partitioning, and high-performance query tuning."
      },
      { 
        "name": "Oracle", 
        "proficiency": 3.5, 
        "image": "devicon-oracle-plain", 
        "experience": "10+ years",
        "tags": ["Database"],
        "description": "Managed high-availability Oracle databases, optimizing performance through query tuning, partitioning, and advanced PL/SQL development."
      },
      { 
        "name": "MySQL", 
        "proficiency": 5, 
        "image": "devicon-mysql-plain", 
        "experience": "10+ years",
        "tags": ["Database"],
        "description": "Designed and optimized MySQL databases, implementing replication, indexing strategies, and query tuning for high-performance applications."
      },
      { 
        "name": "MariaDB", 
        "proficiency": 5, 
        "image": "devicon-mariadb-plain", 
        "experience": "10+ years",
        "tags": ["Database"],
        "description": "Configured and managed MariaDB databases, leveraging Galera Cluster for high availability and optimizing performance for large-scale deployments."
      },
      { 
        "name": "SQL Lite", 
        "proficiency": 3.5, 
        "image": "devicon-sqlite-plain", 
        "experience": "10+ years",
        "tags": ["Database"],
        "description": "Used SQLite for lightweight, embedded database solutions, ensuring data consistency and optimizing read-heavy operations in mobile and desktop applications."
      },
      { 
        "name": "Microsoft SQL Server", 
        "proficiency": 4, 
        "image": "devicon-microsoftsqlserver-plain", 
        "experience": "10+ years",
        "tags": ["Database"],
        "description": "Developed and optimized database solutions with SQL Server, leveraging stored procedures, indexing strategies, and performance monitoring."
      },
      { 
        "name": "Linux", 
        "proficiency": 4, 
        "image": "devicon-linux-plain", 
        "experience": "10+ years",
        "tags": ["Operating System"],
        "description": "Administered Linux-based environments, automating tasks with shell scripting, optimizing server performance, and ensuring system security."
      },
      { 
        "name": "Windows", 
        "proficiency": 5, 
        "image": "devicon-windows11-plain", 
        "experience": "10+ years",
        "tags": ["Operating System"],
        "description": "Configured and optimized Windows environments for enterprise applications, automating administrative tasks using PowerShell."
      },
      { 
        "name": "MacOS", 
        "proficiency": 4, 
        "image": "devicon-apple-plain", 
        "experience": "10+ years",
        "tags": ["Operating System"],
        "description": "Developed and managed software on MacOS, leveraging Unix-based tools and automation scripts to enhance workflow efficiency."
      },
      { 
        "name": "Git", 
        "proficiency": 5, 
        "image": "devicon-git-plain", 
        "experience": "10+ years",
        "tags": ["Version Control"],
        "description": "Managed version control workflows with Git, implementing branching strategies, CI/CD automation, and collaborative development best practices."
      },
      { 
        "name": "Subversion", 
        "proficiency": 5, 
        "image": "devicon-subversion-plain", 
        "experience": "10+ years",
        "tags": ["Version Control"],
        "description": "Managed version control with Subversion (SVN), implementing branching strategies, repository optimization, and ensuring seamless migration to Git."
      }
    ]
}