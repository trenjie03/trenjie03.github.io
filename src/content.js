// ─────────────────────────────────────────────────────────────
//  All the site's text lives here. Edit this file to fill in
//  your details; you shouldn't need to touch the components.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Ren Jie",
  // Shown under your name on the home page and in the browser tab.
  role: "Engineering student building embedded systems and hardware.",
  email: "you@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/trenjie03" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    // Put resume.pdf in /public and this link will work.
    { label: "Resume", href: "/resume.pdf" },
  ],
};

export const home = {
  // One or two short paragraphs. Plain text.
  intro: [
    "I'm a university student who likes taking ideas from schematic to working board. Write a sentence or two here about what you build and what you care about.",
  ],
  // What you're working on right now. Set to "" to hide.
  now: "Currently working on: a short line about your current project.",
};

// Projects appear newest first in the order listed here.
// featured: true  → also shown on the home page.
// image           → optional; put the file in /public/projects/ and use "/projects/name.jpg".
// links           → optional; any number of { label, href }.
export const projects = [
  {
    title: "ESP32 Data Logger",
    year: "2026",
    summary: "WiFi CSV streaming from an HX711 load cell.",
    details:
      "Optional longer description. What problem it solves, how it works, what you learned. Leave as \"\" to hide.",
    tags: ["ESP32", "HX711", "C++"],
    image: "",
    links: [{ label: "Code", href: "https://github.com/trenjie03" }],
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
    featured: true,
  },
  {
    title: "2.4 GHz Antenna",
    year: "2025",
    summary: "Antenna design for indoor localization.",
    details: "",
    tags: ["RF", "Antenna design"],
    image: "",
    links: [],
    featured: true,
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
      period: "2026 – now",
      title: "Role or position",
      org: "Organisation",
      note: "One line on what you did.",
    },
  ],
  education: [
    {
      period: "20XX – 20XX",
      title: "Degree, major",
      org: "University",
      note: "",
    },
  ],
  // Grouped skills. Add or remove groups freely.
  skills: [
    { group: "Embedded", items: ["C / C++", "STM32", "ESP32", "PlatformIO"] },
    { group: "Hardware", items: ["KiCad", "PCB layout", "Analog design"] },
    { group: "Tools", items: ["Git", "Python", "Fusion 360"] },
  ],
};
