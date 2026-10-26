/*
  Contenido editable de la web.
  Para reemplazar imágenes, subí los archivos a /public con la misma ruta indicada en `src`.
  Mientras un archivo no exista, en desarrollo se muestra un espacio reservado con su ruta
  y en la versión publicada simplemente no se muestra.
*/

export const brand = {
  name: "Lucila",
  handle: "lucila.comunicacion",
};

const whatsappNumber = "5492345444904";

export const contact = {
  email: "abalolucila@gmail.com",
  instagram: "https://www.instagram.com/lucila.comunicacion/",
  tiktok: "https://www.tiktok.com/@lucila.comunicacion",
  whatsappDisplay: "234 544 4904",
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  formUrl: "https://forms.gle/bMLRyDx2KsoAYUaKA",
};

export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "portfolio", label: "Portfolio" },
  { id: "servicios", label: "Servicios" },
  { id: "formacion", label: "Formación" },
  { id: "contacto", label: "Contacto" },
] as const;

export const intro = {
  title: "¡Hola, soy Lucila!",
  role: "Social Media Manager, Community Manager y Licenciada en Comunicación Social (UNLP).",
  text: "Mi objetivo es ayudarte a construir, gestionar y hacer crecer la presencia de tu negocio en redes sociales a través de una estrategia clara, creativa y auténtica.",
  video: "/videos/video-saludo.mp4",
};

export type MediaItem = {
  src: string;
  alt: string;
  type?: "image" | "video";
  label?: string;
  aspect?: string;
};

export type ResultItem = MediaItem & {
  title: string;
  platform?: "Instagram" | "TikTok";
};

export type TaskGroup = {
  title: string;
  items: string[];
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  instagram: string;
  cover: MediaItem;
  gallery: MediaItem[];
  tasks: TaskGroup[];
  results: ResultItem[];
};

function gallerySlots(slug: string, name: string): MediaItem[] {
  const base = `/portfolio/${slug}`;
  return [
    { src: `${base}/publicacion-01.jpg`, alt: `Publicación de ${name}`, label: "Publicación", aspect: "4/5" },
    { src: `${base}/publicacion-02.jpg`, alt: `Publicación de ${name}`, label: "Publicación", aspect: "4/5" },
    { src: `${base}/publicacion-03.jpg`, alt: `Publicación de ${name}`, label: "Publicación", aspect: "4/5" },
    { src: `${base}/historia-01.jpg`, alt: `Historia de ${name}`, label: "Historia", aspect: "9/16" },
    { src: `${base}/historia-02.jpg`, alt: `Historia de ${name}`, label: "Historia", aspect: "9/16" },
    { src: `${base}/reel-01.mp4`, alt: `Reel de ${name}`, label: "Reel", type: "video", aspect: "9/16" },
  ];
}

export const projects: Project[] = [
  {
    slug: "la-casa-del-plotter",
    name: "La Casa del Plotter",
    description:
      "Emprendimiento de diseños personalizados en vinilo y productos para eventos, negocios y decoración.",
    instagram: "https://www.instagram.com/lacasadelplotter/",
    cover: {
      src: "/portfolio/la-casa-del-plotter/portada.jpg",
      alt: "Portada del proyecto La Casa del Plotter",
      aspect: "4/5",
    },
    gallery: gallerySlots("la-casa-del-plotter", "La Casa del Plotter"),
    tasks: [
      {
        title: "Estrategia y planificación",
        items: [
          "Diagnóstico y optimización del perfil.",
          "Planificación de estrategia y calendario de contenidos.",
        ],
      },
      {
        title: "Creación de contenido",
        items: [
          "Creación de contenido en el lugar.",
          "Definición de tipografía.",
          "Diseño de publicaciones e historias.",
          "Edición de video en CapCut para Reels.",
          "Redacción de copys.",
        ],
      },
      {
        title: "Gestión y análisis",
        items: ["Gestión de Instagram.", "Análisis de métricas y resultados."],
      },
    ],
    results: [
      {
        src: "/portfolio/la-casa-del-plotter/resultados-antes-despues.png",
        alt: "Comparación del perfil de Instagram de La Casa del Plotter antes y después de la gestión",
        title: "Antes y después del perfil",
        aspect: "16/10",
      },
      {
        src: "/portfolio/la-casa-del-plotter/resultados-reel.png",
        alt: "Captura de las estadísticas de un Reel de La Casa del Plotter",
        title: "Estadísticas de un Reel",
        aspect: "4/5",
      },
      {
        src: "/portfolio/la-casa-del-plotter/resultados-balance-mensual.png",
        alt: "Captura del balance mensual de La Casa del Plotter",
        title: "Balance mensual",
        aspect: "4/5",
      },
    ],
  },
  {
    slug: "iconic-teen",
    name: "Iconic Teen",
    description: "Tienda de indumentaria para niños, niñas y adolescentes.",
    instagram: "https://www.instagram.com/iconicteenmodajuvenil",
    cover: {
      src: "/portfolio/iconic-teen/portada.jpg",
      alt: "Portada del proyecto Iconic Teen",
      aspect: "4/5",
    },
    gallery: gallerySlots("iconic-teen", "Iconic Teen"),
    tasks: [
      {
        title: "Estrategia y planificación",
        items: [
          "Diagnóstico y optimización del perfil.",
          "Planificación de estrategia y calendario de contenido.",
        ],
      },
      {
        title: "Creación de contenido",
        items: [
          "Diseño de publicaciones e historias.",
          "Edición de video en CapCut para Reels.",
          "Redacción de copys y hashtags.",
        ],
      },
      {
        title: "Gestión y análisis",
        items: ["Gestión de Instagram.", "Análisis de métricas y resultados."],
      },
    ],
    results: [
      {
        src: "/portfolio/iconic-teen/resultados-antes-despues.png",
        alt: "Comparación del perfil de Instagram de Iconic Teen antes y después de la gestión",
        title: "Antes y después del perfil",
        aspect: "16/10",
      },
    ],
  },
  {
    slug: "mi-marca-personal",
    name: "Mi marca personal",
    description:
      "Mi propio espacio para desarrollar estrategias, crear contenido y experimentar con formatos para Instagram y TikTok.",
    instagram: "https://www.instagram.com/lucila.comunicacion/",
    cover: {
      src: "/portfolio/mi-marca-personal/portada.jpg",
      alt: "Portada del proyecto Mi marca personal",
      aspect: "4/5",
    },
    gallery: gallerySlots("mi-marca-personal", "mi marca personal"),
    tasks: [
      {
        title: "Estrategia y planificación",
        items: [
          "Creación de mi marca personal.",
          "Planificación de estrategia y calendario de contenidos.",
        ],
      },
      {
        title: "Creación de contenido",
        items: [
          "Diseño de publicaciones e historias.",
          "Creación y edición de video en CapCut para Reels y TikToks.",
          "Redacción de copys.",
        ],
      },
      {
        title: "Gestión y análisis",
        items: ["Gestión de Instagram.", "Análisis de métricas y resultados."],
      },
    ],
    results: [
      {
        src: "/portfolio/mi-marca-personal/resultados-instagram.png",
        alt: "Vista general de las estadísticas de Instagram de lucila.comunicacion",
        title: "Vista general de estadísticas",
        platform: "Instagram",
        aspect: "4/5",
      },
      {
        src: "/portfolio/mi-marca-personal/resultados-tiktok.png",
        alt: "Mockup con estadísticas de TikTok de lucila.comunicacion",
        title: "Estadísticas de TikTok",
        platform: "TikTok",
        aspect: "4/5",
      },
    ],
  },
];

export const services = {
  integral: {
    title: "Gestión integral de Instagram",
    items: [
      "Diagnóstico y optimización del perfil.",
      "Estrategia y planificación de contenidos.",
      "Calendario mensual de publicaciones.",
      "Diseño de publicaciones e historias.",
      "Edición de Reels.",
      "Redacción de copys y hashtags estratégicos.",
      "Gestión de la comunidad.",
      "Análisis de métricas y resultados.",
    ],
  },
  individual: {
    title: "Servicios individuales",
    note: "Se contratan de manera individual y no incluyen una estrategia integral ni la planificación de contenidos.",
    items: [
      "Edición de Reels de hasta un minuto.",
      "Packs de edición de 10 videos.",
      "Diseño de publicaciones y edición de piezas gráficas.",
      "Diseño de carruseles de 3 a 10 placas.",
      "Diseño de flyers e historias.",
      "Optimización del perfil de Instagram, incluyendo tipografía, destacados, colores y recursos visuales.",
      "Creación de contenido presencial por hora.",
      "Asesorías personalizadas.",
    ],
  },
  steps: [
    { number: "01", title: "Conozco tu negocio", text: "Conozco tu marca, tus objetivos y tus necesidades." },
    { number: "02", title: "Planifico la estrategia", text: "Defino el enfoque y organizo los contenidos según tus objetivos." },
    { number: "03", title: "Creo el contenido", text: "Diseño, edito y preparo las publicaciones para tu marca." },
    { number: "04", title: "Analizo los resultados", text: "Reviso las métricas para identificar oportunidades de mejora." },
  ],
};

export const education = {
  degree: {
    title: "Licenciatura en Comunicación Social",
    orientation: "Orientación en Planificación",
    institution: "Universidad Nacional de La Plata (UNLP)",
    years: "2015–2026",
  },
  courses: [
    { name: "Conceptos básicos del Marketing Digital", institution: "Google Actívate", year: "2020" },
    { name: "Copywriting para redes sociales", institution: "Domestika", year: "2022" },
    { name: "Certificación de Google Analytics", institution: "Google Digital Academy (Skillshop)", year: "2026" },
    { name: "Graphic Design Essentials", institution: "Canva Design School", year: "2026" },
    { name: "Convertite en Community Manager", institution: "Juliana Comunidad", year: "2026" },
    { name: "Certificación de Marketing en redes sociales", institution: "HubSpot Academy", year: "2026" },
    { name: "Marketing de contenido", institution: "Luzzi Digital", year: "2026" },
    { name: "Storytelling en el Marketing Digital", institution: "Universidad de Chicago y Santander Open Academy", year: "2026" },
    { name: "Publicidad en redes sociales", institution: "Santander Open Academy", year: "2026" },
    { name: "SEO y Content Marketing", institution: "Santander Open Academy", year: "2026" },
  ],
};

export const contactCopy = {
  title: "¡Trabajemos junt@s!",
  text: "Si te gusta mi propuesta de trabajo y querés empezar a delegar la gestión de tus redes, escribime. Me encantaría conocer tu marca y saber cómo puedo ayudarte.",
  formText:
    "¿Querés que conozca mejor tu negocio? Completá este breve formulario con información sobre tu marca, tus objetivos y lo que necesitás comunicar.",
};
