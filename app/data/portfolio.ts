import type { IconName } from "../components/Icon";

export const navigation = [
  ["Início", "inicio"],
  ["Projetos", "projetos"],
  ["Experiência", "experiencia"],
  ["Competências", "competencias"],
  ["Sobre", "sobre"],
  ["Contato", "contato"],
] as const;
export const contacts = {
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=joao.santoss75180@gmail.com",
  emailAddress: "joao.santoss75180@gmail.com",
  github: "https://github.com/joao-juvino",
  linkedin: "https://www.linkedin.com/in/joao-juvino",
  resume: "/curriculo-joao-santos.pdf",
};
export const experience = [
  {
    company: "Fidelizar+",
    period: "2026 — Atual",
    role: "Engenheiro de Software",
    mark: "F+",
    items: [
      "Desenvolvimento de APIs e aplicações backend com C#, .NET 8/10 e ASP.NET Core.",
      "Arquitetura de microsserviços e monólitos, aplicando DDD, SOLID e Clean Architecture.",
      "Desenvolvimento de integrações, webhooks e workers para plataformas de e-commerce.",
      "Implementação de mensageria e sistemas resilientes com RabbitMQ, Redis, idempotência, retry e rate limiting.",
      "Atuação em produção, CI/CD e infraestrutura, com Docker, GitHub Actions e AWS, incluindo investigação e resolução de incidentes.",
    ],
  },
  {
    company: "Projeto NuFuturo",
    period: "2023 — 2026",
    role: "Engenheiro de Software",
    mark: "N",
    items: [
      "Desenvolvimento de APIs e soluções backend com Java/Spring Boot, Python/Flask, Clojure/Pedestal e PostgreSQL.",
      "Desenvolvimento de pipeline assíncrono para processamento de arquivos utilizando AWS S3, Lambda, SQS, DynamoDB e AuroraDB.",
      "Desenvolvimento de ferramenta de detecção de informações sensíveis integrando regex, YARA, osquery, Fleet e inteligência artificial, com atuação em produção e resolução de incidentes.",
    ],
  },
];
export const technologies: { title: string; icon: IconName; items: string }[] =
  [
    {
      title: "Backend",
      icon: "code",
      items:
        "Java, Spring Boot, Python, C#, .NET, ASP.NET Core, Flask, Clojure, APIs REST",
    },
    {
      title: "Arquitetura",
      icon: "architecture",
      items:
        "Microsserviços, Monólitos, DDD, Clean Architecture, SOLID, CQRS, Dependency Injection",
    },
    {
      title: "Mensageria e processamento",
      icon: "queue",
      items:
        "RabbitMQ, AWS SQS, Workers, Processamento assíncrono, Retry, Idempotência",
    },
    {
      title: "Banco de dados",
      icon: "database",
      items:
        "PostgreSQL, MongoDB, Entity Framework Core, DynamoDB, AuroraDB, Redis",
    },
    {
      title: "Cloud / DevOps",
      icon: "cloud",
      items:
        "AWS, EC2, S3, Lambda, API Gateway, SES, Docker, GitHub Actions, Portainer, Cloudflare R2, Ansible",
    },
    {
      title: "Qualidade",
      icon: "shield",
      items:
        "Testes unitários, testes de integração, testes de contrato, mocks, Code Review",
    },
  ];
export const about =
  "Sou Engenheiro de Software com mais de 3 anos de experiência em backend, APIs, integrações e sistemas distribuídos. Tenho experiência com Java, microsserviços, mensageria, workers e bancos de dados, além de atuação em produção envolvendo desenvolvimento, arquitetura, deploy, observabilidade e manutenção de sistemas legados.";
export const testimonials = [
  {
    name: "Rebeca Luana Lopes",
    photo: "/media/rebeca-luana-lopes.jpeg",
    initials: "RL",
    role: "Film Colorist | Remote Grading | Available Worldwide",
    context: "Cliente de João",
    excerpt:
      "Trabalhar com João no desenvolvimento do meu site profissional foi uma experiência excelente. [...] é extremamente responsável com prazos, ágil nas respostas e muito confiável. [...] Com certeza voltarei a colaborar com ele em mais projetos!",
    paragraphs: [
      "Trabalhar com João no desenvolvimento do meu site profissional foi uma experiência excelente. Ele conseguiu entender minhas demandas como colorista e o posicionamento que eu buscava para apresentar meu trabalho e atrair grandes marcas, transformando ideias em soluções ainda melhores do que eu imaginava.",
      "Além de ter bastante domínio em tecnologia, é extremamente responsável com prazos, ágil nas respostas e muito confiável. O João também se destaca pela gentileza, paciência e facilidade em explicar conceitos técnicos de forma clara para quem não é da área.",
      "Com certeza voltarei a colaborar com ele em mais projetos!",
    ],
  },
  {
    name: "Jamiris Santos",
    photo: "/media/jamiris-santos.jpeg",
    initials: "JS",
    role: "Especialista em Branding e Comunicação Visual Estratégica",
    context: "Trabalhou com João em equipes diferentes",
    excerpt:
      "João é aquele tipo de profissional que faz diferença no dia a dia. É uma pessoa parceira, responsável e sempre disposta a ajudar quando necessário. [...] É um profissional que eu recomendaria sem hesitar.",
    paragraphs: [
      "João é aquele tipo de profissional que faz diferença no dia a dia. É uma pessoa parceira, responsável e sempre disposta a ajudar quando necessário.",
      "Além de ser muito comprometido com o que faz, tem uma postura tranquila e colaborativa, o que torna o trabalho em equipe muito mais leve. É alguém que sabe ouvir, contribuir com ideias e se adaptar aos diferentes desafios que aparecem.",
      "Tenho muita confiança no trabalho do João e acredito que ele tem muito a contribuir por onde passar. É um profissional que eu recomendaria sem hesitar.",
    ],
  },
];
