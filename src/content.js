// ─────────────────────────────────────────────────────────────
//  All the site's text lives here. Edit this file to fill in
//  your details; you shouldn't need to touch the components.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Ren Jie",
  // Shown under your name on the home page and in the browser tab.
  role: "Engineering Product Development student | Singapore University of Technology and Design| Currently on exchange at National Yang Ming Chiao Tung University, Hsinchu City, Taiwan.",
  email: "you@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/trenjie03" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/trenjie03" },
    // Put resume.pdf in /public and this link will work.
    { label: "Resume", href: "/resume.pdf" },
  ],
};

export const home = {
  // One or two short paragraphs. Plain text.
  intro: [
    "I'm a university student who likes taking ideas into reality.",
  ],
  // What you're working on right now. Set to "" to hide.
  now: "Currently working on: ",
};

// Projects appear newest first in the order listed here.
// featured: true  → also shown on the home page.
// image           → optional; put the file in /public/projects/ and use "/projects/name.jpg".
// links           → optional; any number of { label, href }.
export const projects = [
  {
    title: "EMBO",
    year: "2026",
    summary: "Embolic agent mixing device.",
    details:
      "EMBO is a device that aims to measure particle sizes and viscosity of embolic agents during preparation, which helps to improve the consistency and accuracy during the mixing process."+
      "Main parts that I worked on include developing the control systems architecture, the screen UI and the firmware for the whole system.",
    
    tags: ["ESP32", "C", "C++"],
    image: "",
    links: [{ label: "Project repository", href: "https://github.com/markantosa/embo" }],
    featured: true,
  },
  {
    title: "ILI9341 UI",
    year: "2026",
    summary: "Touchscreen interface for an ILI9341 display, built with PlatformIO.",
    details: "",
    tags: ["PlatformIO", "Embedded UI"],
    image: "",
    links: [],
    featured: false,
  },
  {
    title: "2.4 GHz Antenna",
    year: "2025",
    summary: "Antenna design for indoor localization.",
    details: "",
    tags: ["RF", "Antenna design"],
    image: "",
    links: [],
    featured: false,
  },
  {
    title: "Project title",
    year: "2025",
    summary: "One-line summary of what it is.",
    details: "",
    tags: ["Tag"],
    image: "",
    links: [],
    featured: false,
  },
];

export const about = {
  // Optional portrait: put it in /public and set e.g. "/me.jpg". Leave "" to hide.
  photo: "",
  bio: [
    "A few sentences about who you are: where you study, what you're focusing on, and how you got into hardware.",
    "A second paragraph about what you're looking for: internships, collaborations, or just people to talk shop with.",
  ],
  // Listed newest first.
  experience: [
    {
      period: "Aug 2025 – Oct 2025",
      title: "Lab Helper, Part Time",
      org: "Fabrication Lab, SUTD",
      note: "Guided Freshmen to use equipment in the Fabrication Lab such as bandsaws, drill press, 3D printers, Laser Cutters.",
    },
  ],
  education: [
    {
      period: "2024 – 2028",
      title: "Engineering Product Development (EPD), Electrical Engineering",
      org: "Singapore University of Technology and Design",
      note: "",
    },
    {
      period: "Sep 2026 – Dec 2026",
      title: "Exchange Student",
      org: "National Yang Ming Chiao Tung University, Hsinchu City, Taiwan",
      note: "Exchange Student",
    },
    {
      period: "Dec 2025 – Jan 2026",
      title: "Winter At Yonsei Programme",
      org: "Yonsei University, Seoul, South Korea",
      note: "",
    },
  ],
  // Grouped skills. Add or remove groups freely.
  skills: [
    { group: "Embedded", items: ["C / C++", "STM32", "ESP32", "PlatformIO"] },
    { group: "Hardware", items: ["KiCad", "PCB layout"] },
    { group: "Tools", items: ["Git", "Python", "Fusion 360"] },
  ],
};
