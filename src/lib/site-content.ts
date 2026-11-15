export const siteNavigation = [
  { label: "Início", to: "/" as const },
  { label: "Empresa", to: "/company" as const },
  { label: "Produtos", to: "/products" as const },
  { label: "Serviços", to: "/services" as const },
  { label: "Contacto", to: "/contact" as const },
];

export const products = [
  {
    id: "korvex",
    name: "Korvex",
    category: "Comunicação empresarial · WhatsApp",
    summary:
      "Plataforma em desenvolvimento para ajudar empresas a gerir conversas via WhatsApp e a estruturar fluxos de interação com clientes.",
    status: "Em desenvolvimento",
    statusDetail: "Produto em desenvolvimento; as funcionalidades podem evoluir.",
    direction: [
      "Integrações com WhatsApp e gestão de conversas",
      "Automação visual e gestão de sessões",
      "Funcionalidades assistidas por IA em avaliação",
    ],
    url: "https://korvex-8.polsia.io",
    accent: "var(--primary)",
  },
  {
    id: "maps",
    name: "Maps Leads Finder",
    category: "Prospecção empresarial · Pesquisa de oportunidades",
    summary:
      "Plataforma em desenvolvimento para descobrir, organizar e pesquisar potenciais contactos empresariais por localização e categoria.",
    status: "Em desenvolvimento",
    statusDetail: "Produto em desenvolvimento; fornecedores e funcionalidades podem variar.",
    direction: [
      "Pesquisa por localização e categoria de actividade",
      "Organização, filtragem e gestão de duplicados",
      "Exportação de dados prevista na direcção do produto",
    ],
    url: "https://maps-leads-finder-saas.onrender.com",
    accent: "var(--status)",
  },
  {
    id: "bowis",
    name: "BOWIS",
    category: "Ponto de venda · Gestão comercial",
    summary:
      "Projecto de software focado em ajudar negócios a organizar produtos, clientes, vendas e operações comerciais.",
    status: "Projecto em desenvolvimento",
    statusDetail: "Projecto em desenvolvimento, sem disponibilidade pública confirmada.",
    direction: [
      "Gestão de produtos e registos de clientes",
      "Operações de venda e gestão comercial",
      "Relatórios e registos de negócio na direcção do produto",
    ],
    accent: "var(--blue-ink)",
  },
] as const;

export const services = [
  {
    title: "Desenvolvimento de websites",
    description:
      "Websites profissionais concebidos para apresentar uma actividade, uma organização ou uma ideia com clareza.",
    problem: "Uma presença digital pouco clara ou desactualizada pode dificultar o primeiro contacto.",
    audience: "Empresas, organizações e pessoas que precisam de uma presença digital própria.",
    start: "Começamos por perceber o público, o conteúdo e os objectivos do website.",
  },
  {
    title: "Aplicações web",
    description:
      "Aplicações acessíveis no navegador, desenhadas em torno de tarefas e requisitos de negócio específicos.",
    problem: "Processos repetidos ou dispersos podem beneficiar de uma ferramenta ajustada à operação.",
    audience: "Equipas e negócios que precisam de organizar um fluxo de trabalho digital.",
    start: "Conversamos sobre utilizadores, tarefas principais e limites do projecto.",
  },
  {
    title: "Software e sistemas",
    description:
      "Soluções de software personalizadas para apoiar operações, informação e necessidades funcionais concretas.",
    problem: "Ferramentas genéricas podem não corresponder aos processos de uma actividade.",
    audience: "Organizações com necessidades que não são cobertas pelas ferramentas existentes.",
    start: "Mapeamos o contexto, as funcionalidades essenciais e as integrações necessárias.",
  },
  {
    title: "Plataformas digitais",
    description:
      "Plataformas planeadas e desenvolvidas para servir diferentes participantes, serviços ou operações digitais.",
    problem: "Uma experiência fragmentada pode tornar a utilização e a gestão mais difíceis.",
    audience: "Negócios e organizações que pretendem reunir processos numa plataforma.",
    start: "Definimos os utilizadores, os principais percursos e o âmbito inicial.",
  },
  {
    title: "Gestão e manutenção tecnológica",
    description:
      "Acompanhamento técnico, manutenção e melhorias contínuas de websites, sistemas e plataformas digitais.",
    problem: "Uma solução em funcionamento também precisa de atenção técnica e evolução.",
    audience: "Equipas que precisam de manter ou melhorar uma solução digital ao longo do tempo.",
    start: "Revemos a solução existente e conversamos sobre prioridades e necessidades.",
  },
] as const;

export const principles = [
  {
    title: "Clareza antes da complexidade",
    description: "Partimos do problema e dos utilizadores para escolher uma resposta tecnológica adequada.",
  },
  {
    title: "Construção com propósito",
    description: "Cada produto e projecto começa com uma finalidade compreensível e um âmbito definido.",
  },
  {
    title: "Atenção à qualidade",
    description: "Valorizamos experiências consistentes, trabalho cuidadoso e soluções que possam evoluir.",
  },
  {
    title: "Responsabilidade técnica",
    description: "Consideramos manutenção e gestão como parte do ciclo de vida de uma solução.",
  },
  {
    title: "Aprendizagem contínua",
    description: "A tecnologia muda; as decisões devem ser revistas à luz das necessidades reais.",
  },
  {
    title: "Relações transparentes",
    description: "Comunicamos o âmbito, as limitações e o estado de cada produto com honestidade.",
  },
] as const;

export const productStatusLabel = "Em desenvolvimento";