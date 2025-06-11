type SkillType =
  | "Frontend"
  | "Backend"
  | "Fullstack"
  | "Habilidades Frontend"
  | "Habilidades Backend"
  | "Habilidades Fullstack"
  | "Experiencia"
  | "Soft Skills"
  | "Testing";



export type Skill = {
  i18nRef: string;
  value: number;
  skillType?: SkillType;
};

export type ChartInterface = {
  tecnologias: Skill[];
  habilidades: Skill[];
  "Habilidades blandas": Skill[];
};

export const technologies: ChartInterface = {
  tecnologias: [
      { i18nRef : "tecnologias.Frontend.Javascript", value: 5, skillType: "Frontend" },
      { i18nRef : "tecnologias.Frontend.Typescript", value: 10, skillType: "Frontend" },
      { i18nRef : "tecnologias.Frontend.React", value: 7, skillType: "Frontend" },
      { i18nRef : "tecnologias.Frontend.CSS", value: 1.4, skillType: "Frontend" },
      { i18nRef : "tecnologias.Frontend.HTML", value: 9, skillType: "Frontend" },
      { i18nRef : "tecnologias.Frontend.Zustand", value: 6, skillType: "Frontend" },
      { i18nRef : "tecnologias.Frontend.Tailwind", value: 8, skillType: "Frontend" },
      { i18nRef : "tecnologias.Frontend.Figma", value: 9, skillType: "Frontend" },
      { i18nRef : "tecnologias.Frontend.Sketch", value: 7, skillType: "Frontend" },
      { i18nRef : "tecnologias.Frontend.Adobe", value: 4, skillType: "Frontend" },
      { i18nRef : "tecnologias.Backend.Nodejs", value: 7, skillType: "Backend" },
      { i18nRef : "tecnologias.Backend.Express", value: 6, skillType: "Backend" },
      { i18nRef : "tecnologias.Backend.Mongodb", value: 6.5, skillType: "Backend" },
      { i18nRef : "tecnologias.Backend.Postgresql", value: 7, skillType: "Backend" },
      { i18nRef : "tecnologias.Backend.Prisma", value: 6, skillType: "Backend" },
      { i18nRef : "tecnologias.Backend.Authjs", value: 5.5, skillType: "Backend" },
      { i18nRef : "tecnologias.Fullstack.AWS", value: 6, skillType: "Fullstack" },
      { i18nRef : "tecnologias.Fullstack.Nextjs", value: 8, skillType: "Fullstack" },
      { i18nRef : "tecnologias.Fullstack.Supabase", value: 6, skillType: "Fullstack" },
      { i18nRef : "tecnologias.Fullstack.Github", value: 5, skillType: "Fullstack" },
      
    ],

  habilidades:[
      { i18nRef : "habilidades.Frontend.svg_graphics", value: 6, skillType: "Experiencia" },
      { i18nRef : "habilidades.Frontend.ux_ui", value: 9, skillType: "Experiencia" },
      { i18nRef : "habilidades.Frontend.accessibility", value: 7, skillType: "Experiencia" },
      { i18nRef : "habilidades.Frontend.seo", value: 8, skillType: "Experiencia" },
      { i18nRef : "habilidades.Frontend.responsive_design", value: 8, skillType: "Experiencia" },
      { i18nRef : "habilidades.Frontend.interactive_ui", value: 8, skillType: "Experiencia" },
      { i18nRef : "habilidades.Frontend.design_systems", value: 6, skillType: "Experiencia" },
      { i18nRef : "habilidades.Frontend.cross_browser", value: 8, skillType: "Experiencia" },
      { i18nRef : "habilidades.Frontend.best_practices", value: 8, skillType: "Experiencia" },
      { i18nRef : "habilidades.Frontend.pwa", value: 6, skillType: "Experiencia" },
      { i18nRef : "habilidades.Frontend.web_performance", value: 7, skillType: "Experiencia" },
      
      {i18nRef : "habilidades.Testing.unit_testing", value: 7, skillType: "Testing" },
      {i18nRef : "habilidades.Testing.integration_testing", value: 7, skillType: "Testing" },
      {i18nRef : "habilidades.Testing.ui_testing", value: 7, skillType: "Testing" },
      {i18nRef : "habilidades.Testing.acceptance_testing", value: 7, skillType: "Testing" },
      {i18nRef : "habilidades.Testing.stress_testing", value: 5.5, skillType: "Testing" },
      {i18nRef : "habilidades.Testing.security_testing", value: 6, skillType: "Testing" },
      {i18nRef : "habilidades.Testing.accessibility_testing", value: 7, skillType: "Testing" },
      {i18nRef : "habilidades.Testing.usability_testing", value: 6.5, skillType: "Testing" },
      {i18nRef : "habilidades.Testing.automated_testing", value: 7, skillType: "Testing" },
    ],
  "Habilidades blandas": [
    { i18nRef : "habilidadesBlandas.creatividad", value: 9, skillType: "Soft Skills" },
    { i18nRef : "habilidadesBlandas.empatia", value: 8, skillType: "Soft Skills" },
    { i18nRef : "habilidadesBlandas.teamwork", value: 7, skillType: "Soft Skills" },
    { i18nRef : "habilidadesBlandas.liderazgo", value: 9, skillType: "Soft Skills" },
    { i18nRef : "habilidadesBlandas.communicacion", value: 8, skillType: "Soft Skills" },
    { i18nRef : "habilidadesBlandas.escuchaActiva", value: 8, skillType: "Soft Skills" },
    { i18nRef : "habilidadesBlandas.autonomia", value: 9, skillType: "Soft Skills" },
    { i18nRef : "habilidadesBlandas.pensamientoCritico", value: 7, skillType: "Soft Skills" },
    { i18nRef : "habilidadesBlandas.responsabilidad", value: 9, skillType: "Soft Skills" },
    { i18nRef : "habilidadesBlandas.aptoaAprender", value: 10, skillType: "Soft Skills" },  
  
  ],
};