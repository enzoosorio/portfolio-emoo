export interface Project {
  project_id : number;
  project_name: string;
  project_description: string;
  project_link: string;
  project_images: string[];
  project_github: string;
}

  export const projects_realized : Project[] = [
    {
      project_id : 1,
      project_name : "Yin Dye",
      project_description : "Un proyecto de tintes naturales y sostenibles, donde se explora la conexión entre la naturaleza y la moda.",
      project_link : "https://yindye.com",
      project_images : [
        "/images/image.png",
        "/images/imageproject-2.png",
        "/images/image.png",
        "/images/imageproject-2.png",
        "/images/image.png",
        "/images/imageproject-2.png",
      ],
      project_github : "link to github",
    },
    {
      project_id : 2,
      project_name : "Level Up",
      project_description : "Un proyecto de desarrollo personal y profesional, que ofrece recursos y herramientas para mejorar habilidades y alcanzar metas.",
      project_link : "https://levelup.com",
      project_images : [
        "/images/imageproject-2.png",
        "/images/image.png",
        "/images/image.png",
        "/images/imageproject-2.png",
        "/images/image.png",
        "/images/imageproject-2.png",
      ],
      project_github : "https://github.com/enzoosorio/level-up-f",
    },
    {
      project_id : 3,
      project_name : "Giovanni Salvatore",
      project_description : "Un proyecto de diseño y desarrollo web, que muestra el portafolio de un diseñador y desarrollador web.",
      project_link : "https://giovannisalvatore.com",
      project_images : [
        "/images/image.png",
        "/images/imageproject-2.png",
        "/images/image.png",
        "/images/imageproject-2.png",
        "/images/image.png",
        "/images/imageproject-2.png",
      ],
      project_github : "https://github.com/enzoosorio/level-up-f",
    },
    {
      project_id : 4,
      project_name : "Mi primer WAT",
      project_description : "Un proyecto que documenta la experiencia de un viaje de trabajo y aventura, compartiendo consejos y recomendaciones.",
      project_link : "https://myportfolio.com",
      project_images : [
        "/images/image.png",
        "/images/imageproject-2.png",
        "/images/image.png",
        "/images/imageproject-2.png",
        "/images/image.png",
        "/images/imageproject-2.png",
      ],
      project_github : "https://github.com/enzoosorio/level-up-f",
    },
    {
      project_id : 5,
      project_name : "Revimax",
      project_description : "Un sistema de gestión de revisiones técnicas vehiculares, que permite a los usuarios programar y realizar revisiones de sus vehículos.",
      project_link : "https://revimax.com",
      project_images : [
        "/images/image.png",
        "/images/imageproject-2.png",
        "/images/image.png",
        "/images/imageproject-2.png",
        "/images/image.png",
        "/images/imageproject-2.png",
      ],
      project_github : "https://github.com/enzoosorio/level-up-f",
    }
  ]