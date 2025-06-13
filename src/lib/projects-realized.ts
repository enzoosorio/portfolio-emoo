export interface Project {
  project_id : number;
  i18n_key: string;
  project_link?: string;
  project_images: string[];
  project_github?: string;
  project_figma?: string;
}

  export const projects_realized : Project[] = [
  {
    project_id: 1,
    i18n_key: "yinDye",
    project_link: "https://yindye2-0.vercel.app/",
    project_images: [
      "/images/third-part/yin-dye/yin-dye-1.webp",
      "/images/third-part/yin-dye/yin-dye-2.webp",
      "/images/third-part/yin-dye/yin-dye-3.webp",
      "/images/third-part/yin-dye/yin-dye-4.webp",
      "/images/third-part/yin-dye/yin-dye-5.webp",
    ],
    project_github: "https://github.com/enzoosorio/yindye2.0",
    project_figma: "https://www.figma.com/design/uHEI6UyEp9ag3isdzSjCVq/YinDyeArt-2.0?node-id=0-1&t=dtTZVZFa14QE5RfN-1",
  },
  {
    project_id: 2,
    i18n_key: "levelUp",
    project_images: [
      "/images/third-part/level-up-v1/level-up-v1-1.webp",
      "/images/third-part/level-up-v1/level-up-v1-2.webp",
      "/images/third-part/level-up-v1/level-up-v1-3.webp",
    ],
    project_github: "https://github.com/enzoosorio/level-up-f",
  },
  {
    project_id: 3,
    i18n_key: "levelUp2",
    project_images: [
     "/images/third-part/level-up-v2/level-up-v2-1.webp",
      "/images/third-part/level-up-v2/level-up-v2-2.webp",
      "/images/third-part/level-up-v2/level-up-v2-3.webp",
      "/images/third-part/level-up-v2/level-up-v2-4.webp",
      "/images/third-part/level-up-v2/level-up-v2-5.webp",
      "/images/third-part/level-up-v2/level-up-v2-6.webp",
    ],
    project_github: "https://github.com/enzoosorio/level-up-f",
    project_figma: "https://www.figma.com/design/sXgpdQLGuHjft9ves3lKuD/LEVEL-UP---COMPRA-VENTA-DE-SEGUNDA-MANO?node-id=0-1&t=lSx3jXGddauKRFmG-1",
  },
  {
    project_id: 4,
    i18n_key: "miPrimerWAT",
    project_link: "https://mi-primer-watt.vercel.app/",
    project_images: [
      "/images/third-part/mi-primer-wat/primer-wat-1.webp",
      "/images/third-part/mi-primer-wat/primer-wat-2.webp",
      "/images/third-part/mi-primer-wat/primer-wat-3.webp",
      "/images/third-part/mi-primer-wat/primer-wat-4.webp",
      "/images/third-part/mi-primer-wat/primer-wat-5.webp",
    ],
    project_github: "https://github.com/enzoosorio/mi-primer-watt",
    project_figma: "https://www.figma.com/design/4KeXVPNcdr2Vp6wohVHSvD/PHOTO-ALBUM-WAT?node-id=0-1&t=FbkjKbObEHxJOCBY-1"

  },
  {
    project_id: 5,
    i18n_key: "revimax",
    project_images: [
      "/images/third-part/revimax/revimax-1.webp",
      "/images/third-part/revimax/revimax-2.webp",
      "/images/third-part/revimax/revimax-3.webp",
      "/images/third-part/revimax/revimax-4.webp",
      "/images/third-part/revimax/revimax-5.webp",
      "/images/third-part/revimax/revimax-6.webp",
    ],
    project_figma: "https://www.figma.com/design/JZvnVesnOdTde7NOGruxMk/REVIMAX---sistema-de-revisi%C3%B3n-t%C3%A9cnica?node-id=11-47&t=fBwWI5WUurz7tW6T-1",
  },
]
