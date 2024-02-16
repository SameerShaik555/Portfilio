import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Social Media Marketing",
    icon: mobile,
  },
  {
    title: "Shopify Development",
    icon: backend,
  },
  {
    title: "AI Powered Solutions",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Application Development",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [ "Unlock streamlined operations, enhanced user experiences, and unique online services with our custom web application development. From customer portals to booking systems and inventory management tools, we craft tailored solutions using cutting-edge web technologies. Expect scalable, secure, and responsive applications that add tangible value to your business and delight your customers. Let's revolutionize your online presence together!",
    ],
  },
  {
    title: "Social Media Marketing",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Elevate your brand's presence with our social media marketing expertise. From crafting engaging content to strategic campaign management, we'll drive meaningful interactions and boost your online visibility. Maximize your reach, engage your audience, and achieve your marketing goals with our tailored solutions. Let's amplify your social media presence together!",
    ],
  },
  {
    title: "Shopify Development",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Transform your online store with our Shopify development services. From customizing themes to optimizing for conversions, we ensure a seamless e-commerce experience that aligns with your brand and boosts sales. With us, capitalize on the booming e-commerce market and expand your reach effortlessly. Let's elevate your online presence together!",
    ],
  },
  {
    title: "AI-Powered Marketing Solutions",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Harnessing the power of AI, we craft dynamic solutions tailored to your needs. Our innovative approach ensures personalized experiences, data-driven strategies, and unparalleled results. Experience the future of marketing with our AI-powered solutions. Let's revolutionize your business together!"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Personal Portofilio",
    description:
      "Web-based platform that allows users to leave a request",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://flamboyant-heyrovsky-91fcd9.netlify.app",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
