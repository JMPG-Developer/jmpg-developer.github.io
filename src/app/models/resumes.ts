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


export const certifications: Resumes = {
    list: [
      {
        title: 'Confluent Fundamentals Accreditation',
        start: 2022,
        location: 'Confluent',
        descriptions: [
          'The Confluent Fundamentals Accreditation certifies foundational knowledge of Apache Kafka and the Confluent platform, covering event streaming concepts, architecture, and best practices for real-time data processing'
        ]
      },
      {
        title: 'Professional Scrum Master™ I (PSM I)',
        start: 2021,
        location: 'Scrum.org',
        descriptions: [ 
          'Those who earn the globally recognized Professional Scrum Master I (PSM I) certification have demonstrated a fundamental level of Scrum mastery, including the concepts of applying Scrum, and proven an understanding of Scrum as described in the Scrum Guide. This individual has also demonstrated a consistent use of terminology and approach to Scrum.'
        ]
      },
      {
        title: 'Oracle Certified Associate, Java SE 8 Programmer',
        start: 2019,
        location: 'Oracle',
        descriptions: [
          'An Oracle Certified Associate, Java SE 8 Programmer has demonstrated knowledge of object-oriented concepts, the Java programming language and general knowledge of Java platforms and technologies.'
        ]
      }
    ]
  };

export const educations: Resumes = {
    list: [
      {
        title: 'Android Programming',
        start: 2015,
        end: 2016,
        location: 'Universidad Católica de Ávila',
        descriptions: [
          'Mastered the fundamentals of Android and efficiently utilized the development tools covered in the course. Designed projects integrating user interfaces, screen-to-screen navigation, database access, 2D/3D graphics, and multimedia elements. Employed geolocation systems, device sensors, accelerometers, Bluetooth, and multitouch screen features. Also gained an introduction to web projects focused on enterprise client-server environments.'
        ]
      },
      {
        title: 'Unity and Artificial Intelligence Programming',
        start: 2012,
        end: 2013,
        location: 'Gametopia Learning',
        descriptions: [
          'Acquired specialized knowledge in Unity development and AI integration, with a focus on Android-based platforms.'
        ]
      },
      {
        title: 'Software Engineering Degree',
        start: 2010,
        location: 'UNED',
        descriptions: [
          'Covered fundamental programming concepts, along with logic and discrete structures, forming a strong basis for software engineering principles.'
        ]
      },
      {
        title: 'Senior Technician in Software Application Development',
        start: 2008,
        end: 2010,
        location: 'I.E.S. Claudio Moyano',
        descriptions: [
          'Studied multi-user and networked computer systems, performed detailed analysis and design of management software applications, developed structured programs, leveraged 4GL and CASE tools, and created graphical presentation services. Also gained experience in workplace relationships (Relaciones en el Entorno de Trabajo) and Labor Orientation & Training (F.O.L.). '
        ]
      },
    ]
  };

export const experiences: Resumes = {
    list: [
      {
        title: 'Lead Software Engineer',
        start: 2024,
        location: 'Capitole Consulting',
        descriptions: [
          'Developed and implemented advanced systems for real-time alarm signal processing, ensuring a fast and efficient response before being reviewed by an Alarm Receiving Center (ARC).',
          'Leveraged Kafka Streams and KSQL to handle complex events, maintaining data integrity and efficiency.',
          'Collaborated with technical teams to optimize data flow and continuously improve processing solutions based on operational and security requirements.'
        ]
      },
      {
        title: 'Senior Software Engineer',
        start: 2021,
        end: 2024,
        location: 'Corunet by SNGULAR',
        descriptions: [
          'Managed financial transactions in compliance with PSD2 regulations at a leading European digital banking institution, covering transfers, instant payments, direct debits, and loan services.',
          'Strengthened banking systems with advanced and secure technological solutions, leveraging the latest innovations in software development.',
          'Implemented Hexagonal Architecture, Domain-Driven Design, and Event-Driven systems, all built using Java 17.',
        ]
      },
      {
        title: 'Leader Specialist',
        start: 2020,
        end: 2021,
        location: 'NTT Data',
        descriptions: [
          'Led and coordinated cross-functional teams in a major global banking institution using Agile methodologies such as Scrum and Kanban.',
          'Mentored new technical professionals in application development utilizing Java 8, Spring (Spring Boot, Spring Framework, Spring Data, JPA, Hibernate), and Angular 9.',
          'Implemented microservices architectures with Spring Cloud and Docker.',
          'Developed and integrated REST APIs (HATEOAS, Swagger, OpenAPI).',
          'Ensured software quality through unit testing (JUnit, Karma, Jasmine).',
          'Applied continuous integration practices using Jenkins and GitLab CI.',
          'Managed version control systems including Subversion and Git.'
        ]
      },
      {
        title: 'Senior Software Developer',
        start: 2017,
        end: 2020,
        location: 'Devoteam',
        descriptions: [
          'Effectively coordinated multidisciplinary teams using the SCRUM Agile methodology.',
          'Expertise in architectural analysis and design, as well as in developing applications with advanced technologies',
          'Proficient in Java (versions 7, 8, 11).',
          'Extensive experience with the Spring ecosystem (Boot, Framework, Data, JPA, Hibernate).',
          'Front-end development with Angular 9 and Ionic.',
          'Designed and implemented microservices architectures using Docker.',
          'Created and managed advanced RESTful APIs, including HATEOAS, Swagger, and YAML.',
          'Hands-on experience with SOAP services, handling WSDL and JaxWS.',
          'Skilled in unit testing with JUnit.',
          'Applied continuous integration practices with Jenkins and GitLab CI.',
          'Managed version control with Subversion and Git, among other tools.'
        ]
      },
      {
        title: 'Software Developer',
        start: 2010,
        end: 2017,
        location: 'Softoro - Vision IT Group',
        descriptions: [
          'Designed and developed enterprise applications in Java using Spring and Hibernate, focusing on performance and scalability.',
          'Utilized Spring Boot for efficient configurations and Spring MVC for RESTful services.',
          'Practiced TDD to ensure high-quality code and reliability.',
          'Collaborated on software integration efforts and maintained applications with a continuous improvement mindset.',
          'Created detailed documentation of processes and architectures to guarantee clarity and long-term maintainability.',
        ]
      },
    ]
  };