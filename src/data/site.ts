export const siteConfig = {
  name: "Moin Azeem",
  title: "Moin Portfolio Web",
  tagline: "Filmmaker · Graphic Designer · 2D Animator · Video Editor",
  location: "Karachi, Pakistan",
  email: "moinazeem046@gmail.com",
  phone: "+92 342 2029405",
  social: {
    behance: "https://www.behance.net/moinazeem",
    instagram: "",
    youtube: "",
    vimeo: "",
  },
  about:
    "Multidisciplinary creative with 10+ years of experience in graphic design, video editing, and visual storytelling. Passionate about cinematic narratives, brand films, and motion design.",
  services: [
    "Commercial Films",
    "Music Videos",
    "Brand Films",
    "2D Animation",
    "Video Editing",
    "Event Coverage",
  ],
};

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  videoUrl?: string;
  thumbnail?: string;
};

export const projects: Project[] = [
  {
    id: "brand-film-01",
    title: "Chase Up Brand Film",
    category: "Commercial",
    year: "2024",
    description: "High-energy retail campaign film with bold motion graphics and product storytelling.",
  },
  {
    id: "music-video-01",
    title: "Midnight Pulse",
    category: "Music Video",
    year: "2023",
    description: "Atmospheric music video blending live action with stylized color grading.",
  },
  {
    id: "animation-01",
    title: "Motion Identity Reel",
    category: "2D Animation",
    year: "2023",
    description: "Animated logo system and title sequence for a digital-first brand launch.",
  },
  {
    id: "event-01",
    title: "Corporate Summit Highlights",
    category: "Event Film",
    year: "2022",
    description: "Multi-camera event coverage edited into a fast-paced highlight film.",
  },
];
