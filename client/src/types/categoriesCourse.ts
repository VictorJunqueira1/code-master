type CourseWithDetails = {
    name: string;
    description: string;
    link: string;
    svg: string;
    stage: React.ReactNode | number;
};

type CourseWithoutDetails = {
    name: string;
    description: string;
    link: string;
    svg: string;
};

type Course = CourseWithDetails | CourseWithoutDetails;

const futureProjectIcon = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M10 17l5-5-5-5v3H4v4h6v3zm8-15v18H2V2h16zm-2 2H4v14h12V4z' fill='%23000000'/%3E%3C/svg%3E";

export const categories = [
    {
        title: "[Formações] Fundamentos",
        courses: [
            {
                name: "Lógica de Programação",
                description: "Inicie aprendendo os conceitos básicos com uma linguagem de fácil aprendizado.",
                link: "/course/logic-python",
                svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                stage: 1,
            },
            {
                name: "Lógica de Programação",
                description: "Entenda o que acontece nos bastidores com C, explorando memória e desempenho.",
                link: "/course/logic-c",
                svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
                stage: 2,
            },
            {
                name: "Git",
                description: "Aprenda a controlar versões de código com Git e GitHub.",
                link: "/course/git",
                svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                stage: 3,
            },
        ],
    },
    {
        title: "[Formações] Front-End",
        courses: [
            {  stage: 1, name: "HTML", description: "Aprenda os fundamentos do HTML para criar páginas web.", link: "/course/html", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            {  stage: 2, name: "CSS", description: "Domine a estilização de páginas web com CSS.", link: "/course/css", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            {  stage: 3, name: "JavaScript", description: "Aprenda a programar interatividade em páginas web com JavaScript.", link: "/course/javascript", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            {  stage: 4, name: "TypeScript", description: "Expanda suas habilidades com tipos fortes e recursos avançados em JavaScript.", link: "/course/typescript", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            {  stage: 5, name: "Tailwind", description: "Utilize o Tailwind CSS para criar designs responsivos e modernos.", link: "/course/tailwind", svg: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" },
            {  stage: 6, name: "Next.js", description: "Construa aplicações React com renderização do lado do servidor usando Next.js.", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        ],
    },
    {
        title: "[Formações] Back-End",
        courses: [
            {  stage: 1, name: "Node.js", description: "Crie aplicações rápidas e escaláveis com Node.js.", link: "course/nodejs", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            {  stage: 2, name: "Nest.js", description: "Desenvolva aplicações back-end com Node.js usando o framework Nest.js.", link: "course/nestjs", svg: "https://nestjs.com/img/logo-small.svg" },
            {  stage: 1, name: "PHP", description: "Desenvolva aplicações dinâmicas e poderosas com PHP.", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            {  stage: 2, name: "Laravel", description: "Construa aplicações back-end robustas com o framework Laravel.", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
            {  stage: 1, name: "Python", description: "Desenvolva back-end poderoso com Python em projetos diversos.", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            {  stage: 1, name: "Firebase", description: "Explore a plataforma Firebase para autenticação, banco de dados em tempo real e mais.", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            {  stage: 1, name: "C#", description: "Crie aplicações back-end escaláveis com C# e .NET.", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        ],
    },
    {
        title: "[Formações] Banco de Dados",
        courses: [
            {  stage: 1, name: "SQL", description: "Entenda como consultar e manipular dados em bancos relacionais com SQL.", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg" },
            {  stage: 2, name: "MySQL", description: "Aprenda a utilizar o MySQL para armazenar e gerenciar dados de forma eficiente.", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            {  stage: 3, name: "PostgreSQL", description: "Explore o PostgreSQL, um banco de dados relacional robusto e altamente escalável.", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            {  stage: 1, name: "MongoDB", description: "Entenda como utilizar o MongoDB, um banco de dados NoSQL altamente escalável.", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            {  stage: 1, name: "Redis", description: "Utilize o Redis para  stage: 1, armazenamento em cache e gerenciamento de sessões de forma eficiente.", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        ],
    },
    {
        title: "[Formações] Projetos",
        courses: [
            {  stage: 1, name: "Calculadora em JS", description: "Construa uma calculadora simples usando JavaScript.", link: "", svg: futureProjectIcon },
            {  stage: 1, name: "Gerenciamento de Estoque", description: "Crie um sistema de gerenciamento de estoque básico.", link: "", svg: futureProjectIcon },
            {  stage: 1, name: "CRUD em .NET", description: "Desenvolva um sistema CRUD utilizando o framework .NET.", link: "", svg: futureProjectIcon },
            {  stage: 1, name: "Análise de Dados em Python", description: "Analise dados usando Python e bibliotecas como Pandas e NumPy.", link: "", svg: futureProjectIcon },
            {  stage: 1, name: "Portfólio com Next.js", description: "Crie um portfólio pessoal com o Next.js.", link: "", svg: futureProjectIcon },
            {  stage: 1, name: "Mário Game com Firebase", description: "Desenvolva um jogo simples no estilo Mario utilizando o Firebase para autenticação.", link: "", svg: futureProjectIcon },
        ],
    },
];