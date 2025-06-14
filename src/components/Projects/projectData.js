// src/data/projectsData.js
import baatCheet from "../../Assets/Projects/baatCheet.png";
import beyondChat from "../../Assets/Projects/beyondChat.png";
import dekhlo from "../../Assets/Projects/dekhlo.png";
import Docs from "../../Assets/Projects/Docs.png";

const projectsData = [
  {
    imgPath: `${dekhlo}`,
    title: "Dekhlo",
    description:
      "A YouTube-inspired video platform built with React and Material-UI. Features personalized recommendations, efficient search, and video management using MongoDB Atlas—completely independent of the YouTube API.",
    ghLink: "https://github.com/saffronAayush/Youtube",
    demoLink: "https://dekhlo.vercel.app/",
  },
  {
    imgPath: `${Docs}`,
    title: "Docs",
    description:
      "A collaborative real-time document editor like Google Docs, built with Next.js, Tailwind CSS, Clerk, Convex, Liveblocks, and Tiptap. Features multi-user editing, comments, tagging, organization-based access, and export to multiple formats including PDF, HTML, JSON, and text.",
    ghLink: "https://github.com/saffronAayush/docs",
    demoLink: "https://docs-iota-navy.vercel.app/",
  },
  {
    imgPath: `${baatCheet}`,
    title: "BaatCheet",
    description:
      "A full-fledged real-time chat application built with React, Redux, Vite, Tailwind CSS, and Socket.io. Supports group chats, seamless messaging, and an intuitive UI for smooth user experience.",
    ghLink: "https://github.com/saffronAayush/ChatAppClient",
    demoLink: "https://baatcheet-ten.vercel.app/",
  },
  {
    imgPath: `${beyondChat}`,
    title: "BeyondChat",
    description:
      "An AI-enhanced customer support interface built with Vite, Material-UI, and Framer Motion. Features smooth animations, fully responsive and beautiful UI, visualizing client interactions with static data, smart feedback handling, and AI assistant integration.",
    ghLink: "https://github.com/saffronAayush/BeyondChat",
    demoLink: "https://beyond-chat-ten.vercel.app/",
  },
];

export default projectsData;
