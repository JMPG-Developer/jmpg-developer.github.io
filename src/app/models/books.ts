export interface Books {
  list: Book[];
}

export interface Book {
  id?: number;
  languages?: string[];
  name: string;
  description: string;
  resume?: string;
  tags?: string[];
  image: string;
  authors?: string[];
  link?: string;
  notes?: BookNotes;
}

export interface BookNotes {
  level: string;
  highlights: string[];
  whenToRead: string;
}

export const _books: Books = {
      list: [
        {
          id: 1,
          name: "Clean Code",
          description: "Clean Code: A Handbook of Agile Software Craftsmanship is considered a classic in software engineering. Robert C. Martin presents principles, patterns, and best practices for writing code that is easy to read, understand, and maintain. Through many Java examples, the book shows how to detect 'dirty code,' how to refactor it progressively, and how to instill a culture of quality in development teams. It also frames the ethical responsibility of developers to build clean and sustainable software.",
          resume: "Comprehensive guide to writing clean, maintainable code.",
          tags: ["Software Development", "Best Practices"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/clean-code.jpg",
          authors: ["Robert C. Martin"],
          link: "https://amzn.to/45EuFde",
          notes: {
            level: "Intermediate to Advanced",
            highlights: [
              "Improves readability, naming, and code structure.",
              "Strong emphasis on SOLID and unit testing culture.",
              "Java-based examples; principles are language-agnostic."
            ],
            whenToRead: "After mastering basic programming and wanting to improve craftsmanship."
          }
        },
        {
          id: 2,
          name: "Clean Architecture",
          description: "Clean Architecture: A Craftsman's Guide to Software Structure and Design explores how to organize robust and sustainable systems. Robert C. Martin reviews the evolution of architecture—from monoliths to microservices—and explains timeless patterns to build systems independent from frameworks, testable, and resilient to change. It stresses separation of concerns, boundaries, and long-term maintainability for teams of any size.",
          resume: "Principles of software architecture emphasizing longevity and maintainability.",
          tags: ["Software Architecture", "Best Practices"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/clean-architecture.jpg",
          authors: ["Robert C. Martin"],
          link: "https://amzn.to/45TuL1J",
          notes: {
            level: "Intermediate / Architect",
            highlights: [
              "Teaches framework independence and clear boundaries.",
              "Focus on testability and evolutionary design.",
              "Actionable guidance for enduring architectures."
            ],
            whenToRead: "Before starting large-scale projects or moving into architecture roles."
          }
        },
        {
          id: 3,
          name: "The Pragmatic Programmer",
          description: "The Pragmatic Programmer (20th Anniversary Edition) is a foundational text for modern software development. Andrew Hunt and David Thomas gather practical habits and mindsets that elevate programmers into true software craftsmen. Topics range from refactoring and automation to communication, tooling, and designing for change. Its insights are timeless and language-agnostic, making it broadly applicable.",
          resume: "Practical advice and methodologies for software development.",
          tags: ["Software Development", "Best Practices"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/pragmatic-programmer.jpg",
          authors: ["Andrew Hunt", "David Thomas"],
          link: "https://amzn.to/4mEOLuG",
          notes: {
            level: "All levels",
            highlights: [
              "Mindset-building book packed with actionable tips.",
              "Covers communication, tooling, and continuous learning.",
              "Not tied to any language or framework."
            ],
            whenToRead: "Anytime; especially early in your career to build strong habits."
          }
        },
        {
          id: 4,
          name: "Design Patterns",
          description: "Design Patterns: Elements of Reusable Object-Oriented Software introduced the formal catalog of design patterns to software engineering. Known as the 'Gang of Four' book, it documents 23 proven patterns that solve recurring OOP problems. Each pattern includes intent, structure diagrams, participants, implementation notes, and examples. It reshaped how developers think about reusable and expressive designs.",
          resume: "Introduces 23 reusable OOP design patterns to solve common problems.",
          tags: ["Design Patterns"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/design-patterns.jpg",
          authors: ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"],
          link: "https://amzn.to/4lzGsPT",
          notes: {
            level: "Intermediate",
            highlights: [
              "Foundational vocabulary for discussing design.",
              "Pattern structure, applicability, and trade-offs.",
              "Examples are older, but concepts remain essential."
            ],
            whenToRead: "After learning OOP basics, to deepen your design toolkit."
          }
        },
        {
          id: 5,
          name: "Refactoring",
          description: "Refactoring: Improving the Design of Existing Code is the definitive guide to improving legacy or poorly structured code without altering its external behavior. Martin Fowler provides a catalog of refactorings with motivation, mechanics, examples, and pitfalls. The second edition modernizes examples in JavaScript and doubles down on automated testing as the safety net for continuous design improvement.",
          resume: "Techniques for improving code design and maintainability.",
          tags: ["Refactoring", "Best Practices"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/refactoring.jpg",
          authors: ["Martin Fowler"],
          link: "https://amzn.to/4mEJbIw",
          notes: {
            level: "Intermediate",
            highlights: [
              "Step-by-step refactoring catalog.",
              "Promotes test-driven safety for change.",
              "Directly applicable to everyday codebases."
            ],
            whenToRead: "When facing legacy code or seeking incremental design improvements."
          }
        },
        {
          id: 6,
          name: "Domain-Driven Design",
          description: "Domain-Driven Design: Tackling Complexity in the Heart of Software presents a methodology to confront business complexity through domain-centered design. Eric Evans introduces ubiquitous language, bounded contexts, and strategic/tactical patterns that align software models with real domain knowledge. It inspired modern architectural thinking and remains the foundational text for DDD practitioners.",
          resume: "Comprehensive guide to applying Domain-Driven Design to complex domains.",
          tags: ["Domain-Driven Design", "Software Architecture"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/domain-driven-design.jpg",
          authors: ["Eric Evans"],
          link: "https://amzn.to/4mLg2eY",
          notes: {
            level: "Advanced",
            highlights: [
              "Teaches modeling around business language and contexts.",
              "Clear distinction between strategic and tactical design.",
              "Influential groundwork for modern architectures."
            ],
            whenToRead: "Before leading complex, domain-heavy initiatives or platform projects."
          }
        },
        {
          id: 7,
          name: "Building Microservices",
          description: "Building Microservices by Sam Newman is a definitive, practical introduction to the microservices architectural style. It explains trade-offs, team and organizational impacts, deployment strategies, observability, and testing. With real examples, it balances the 'why' and 'how' of decomposed systems, helping teams adopt microservices thoughtfully rather than as a trend.",
          resume: "Comprehensive guide to designing and operating microservices.",
          tags: ["Microservices", "Software Architecture"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/building-microservices.jpg",
          authors: ["Sam Newman"],
          link: "https://amzn.to/418SaJS",
          notes: {
            level: "Intermediate / Architect",
            highlights: [
              "Balanced view of benefits and pitfalls.",
              "Strong focus on team topology and ops concerns.",
              "Great bridge from monoliths to distributed services."
            ],
            whenToRead: "When evaluating or starting a move to microservices."
          }
        },
        {
          id: 8,
          name: "Java: The Complete Reference",
          description: "Java: The Complete Reference by Herbert Schildt is an extensive guide to the Java language and core APIs. It covers syntax, OOP, collections, streams, concurrency, generics, lambdas, modules, and updates up to Java 17+. Filled with examples and clear explanations, it serves as both a learning resource and a desk reference for everyday Java work.",
          resume: "Comprehensive Java guide from fundamentals to modern features.",
          tags: ["Java", "Programming"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/java-complete-reference.jpg",
          authors: ["Herbert Schildt"],
          link: "https://amzn.to/3JiTyUa",
          notes: {
            level: "Beginner to Intermediate",
            highlights: [
              "Wide coverage of language and standard APIs.",
              "Good as a first book and as a long-term reference.",
              "Updated for modern Java features."
            ],
            whenToRead: "When starting with Java or as a go-to reference while coding."
          }
        },
        {
          id: 9,
          name: "Reactive Design Patterns",
          description: "Reactive Design Patterns explores principles and patterns for systems that are responsive, resilient, elastic, and message-driven—the core of the Reactive Manifesto. With practical examples (notably Akka and actors), it addresses back-pressure, isolation, supervision, and elasticity in distributed systems, offering solutions to common real-world challenges.",
          resume: "Guide to building reactive, resilient, and elastic systems.",
          tags: ["Reactive Systems", "Design Patterns"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/reactive-design-patterns.jpg",
          authors: ["Roland Kuhn", "Jamie Allen", "Brian Hanafee"],
          link: "https://amzn.to/4mKjjuV",
          notes: {
            level: "Advanced",
            highlights: [
              "Strong grounding in the Reactive Manifesto.",
              "Actor-model approaches to resilience and scalability.",
              "Practical patterns for back-pressure and supervision."
            ],
            whenToRead: "When designing high-scale, event-driven, or distributed systems."
          }
        },
        {
          id: 10,
          name: "Spring Microservices in Action",
          description: "Spring Microservices in Action shows how to build production-grade microservices using Spring Boot and Spring Cloud. It covers service discovery, config management, client-side load balancing, resilience patterns, monitoring, and deployment. The code-centric approach helps teams adopt Spring Cloud components effectively.",
          resume: "Practical guide to Spring Boot + Spring Cloud for microservices.",
          tags: ["Spring", "Microservices"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/spring-microservices-in-action.jpg",
          authors: ["John Carnell", "Illary Huaylupo Sánchez"],
          link: "https://amzn.to/45V17sQ",
          notes: {
            level: "Intermediate",
            highlights: [
              "Hands-on coverage of discovery, config, resiliency, and monitoring.",
              "Shows concrete Spring Cloud patterns in action.",
              "Deployment and scaling considerations included."
            ],
            whenToRead: "When implementing microservices in the Spring ecosystem."
          }
        },
        {
          id: 11,
          name: "Spring Boot in Action",
          description: "Spring Boot in Action by Craig Walls is a friendly, practical introduction to Spring Boot. It explains auto-configuration, building REST services, data access, testing, and deployment. The examples and tone make it ideal for developers getting started with Spring Boot and its production-ready features.",
          resume: "Hands-on introduction to Spring Boot with production-ready features.",
          tags: ["Spring Boot", "Java"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/spring-boot-in-action.jpg",
          authors: ["Craig Walls"],
          link: "https://amzn.to/41NNFVh",
          notes: {
            level: "Beginner to Intermediate",
            highlights: [
              "Clear walkthroughs of Boot fundamentals.",
              "Great starter for REST + data access.",
              "Good stepping stone to more advanced Spring books."
            ],
            whenToRead: "When first learning Spring Boot or building small/medium services."
          }
        },
        {
          id: 12,
          name: "Mastering Kafka Streams",
          description: "Mastering Kafka Streams by Mitch Seymour targets developers who want to build robust, real-time stream processing applications using the Kafka Streams API. It covers stream/table abstractions, stateful processing with RocksDB, windowing, joins, testing, monitoring, and production deployment strategies.",
          resume: "Advanced techniques for building with Apache Kafka Streams API.",
          tags: ["Kafka", "Stream Processing"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/mastering-kafka-streams.jpg",
          authors: ["Mitch Seymour"],
          link: "https://amzn.to/4mnRkl4",
          notes: {
            level: "Advanced",
            highlights: [
              "Deep dive into state stores, windowing, and joins.",
              "Covers testing and observability for stream apps.",
              "Production-focused guidance for topologies."
            ],
            whenToRead: "After learning Kafka basics and moving into real-time processing."
          }
        },
        {
          id: 13,
          name: "Implementing Domain-Driven Design",
          description: "Implementing Domain-Driven Design by Vaughn Vernon applies Evans’ DDD principles to real projects. It explains identifying bounded contexts, integrating them, and using tactical patterns (entities, aggregates, domain events). With examples in Java and C#, it bridges strategy and implementation with concrete practices.",
          resume: "Practical application of DDD in complex projects with real examples.",
          tags: ["Domain-Driven Design", "Software Architecture"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/implementing-ddd.jpg",
          authors: ["Vaughn Vernon"],
          link: "https://amzn.to/4oD8PiD",
          notes: {
            level: "Advanced",
            highlights: [
              "Connects strategic and tactical DDD with code.",
              "Strong treatment of aggregates and domain events.",
              "Complements Evans’ foundational DDD book."
            ],
            whenToRead: "After Evans' DDD or when applying DDD in a real project."
          }
        },
        {
          id: 14,
          name: "Kafka: The Definitive Guide",
          description: "Kafka: The Definitive Guide is an authoritative reference for understanding and applying Apache Kafka. It explains Kafka’s architecture—topics, partitions, replication, and fault tolerance—along with producer/consumer patterns, ecosystem integrations, and real-world streaming use cases in production.",
          resume: "Comprehensive reference for Kafka architecture and production use.",
          tags: ["Kafka", "Streaming"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/kafka-definitive-guide.jpg",
          authors: ["Neha Narkhede", "Gwen Shapira", "Todd Palino"],
          link: "https://amzn.to/41crZC9",
          notes: {
            level: "Intermediate to Advanced",
            highlights: [
              "Clear mental model of Kafka internals and operations.",
              "Patterns for producers/consumers and ecosystem tooling.",
              "Grounded in real-world production experience."
            ],
            whenToRead: "When adopting Kafka in production or designing data pipelines."
          }
        },
        {
          id: 15,
          name: "Microservices Patterns",
          description: "Microservices Patterns by Chris Richardson catalogs patterns for designing, building, and deploying microservices at scale. It provides solutions for inter-service communication, data consistency, transactions, deployment strategies, and observability, using Java/Spring examples and thorough trade-off analysis.",
          resume: "Patterns for designing, building, and deploying microservices at scale.",
          tags: ["Microservices", "Design Patterns"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/microservices-patterns.jpg",
          authors: ["Chris Richardson"],
          link: "https://amzn.to/4oFazId",
          notes: {
            level: "Intermediate / Architect",
            highlights: [
              "Pattern-driven approach to microservices challenges.",
              "Covers sagas, CQRS, API gateways, and observability.",
              "Strong examples with Spring Boot."
            ],
            whenToRead: "After grasping microservices basics; for advanced implementation details."
          }
        },
        {
          id: 16,
          name: "Effective Java",
          description: "Effective Java by Joshua Bloch compiles 90 best practices for writing robust, maintainable Java code. Each item offers concise advice on object creation, classes and interfaces, generics, lambdas, concurrency, and more. It blends theory with highly actionable examples that improve everyday Java programming.",
          resume: "90 best practices for writing robust, maintainable Java code.",
          tags: ["Java", "Best Practices"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/effective-java.jpg",
          authors: ["Joshua Bloch"],
          link: "https://amzn.to/418Xwoq",
          notes: {
            level: "Intermediate to Advanced",
            highlights: [
              "Itemized, immediately applicable guidance.",
              "Deep coverage of generics, equals/hashCode, and concurrency.",
              "Considered essential reading for professional Java devs."
            ],
            whenToRead: "Soon after learning Java basics to adopt strong habits early."
          }
        },
        {
          id: 17,
          name: "Effective Kafka",
          description: "Effective Kafka by Emmanuel Bernard distills best practices and patterns for designing, implementing, and operating Kafka-based systems. It covers producing/consuming efficiently, schema evolution, reliability, monitoring, and performance tuning, with a pragmatic focus informed by real-world use.",
          resume: "Best practices and patterns for designing and operating Kafka systems.",
          tags: ["Kafka", "Best Practices"],
          languages: ["English", "Spanish"],
          image: "assets/img/books/effective-kafka.jpg",
          authors: ["Emmanuel Bernard"],
          link: "https://amzn.to/45ogBpj",
          notes: {
            level: "Intermediate to Advanced",
            highlights: [
              "Production-minded guidance to avoid common pitfalls.",
              "Covers client efficiency, reliability, and ops practices.",
              "Complements the Definitive Guide with hands-on pragmatism."
            ],
            whenToRead: "Once using Kafka in real projects and needing production-grade practices."
          }
        }
      ]
  };