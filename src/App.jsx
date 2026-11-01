import { useEffect, useState } from "react";
import { site } from "./content.js";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";

// Hash-based tabs (#home, #projects, #about) so every tab has a
// shareable link and refreshes work on GitHub Pages without a server.
const TABS = [
  { id: "home", label: "Home", Page: Home },
  { id: "projects", label: "Projects", Page: Projects },
  { id: "about", label: "About", Page: About },
];

function currentTab() {
  const id = window.location.hash.replace(/^#\/?/, "");
  return TABS.find((t) => t.id === id) ? id : "home";
}

export default function App() {
  const [tab, setTab] = useState(currentTab);

  useEffect(() => {
    const onHash = () => {
      setTab(currentTab());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const active = TABS.find((t) => t.id === tab);

  useEffect(() => {
    document.title = tab === "home" ? site.name : `${active.label} – ${site.name}`;
  }, [tab, active]);

  const { Page } = active;

  return (
    <div className="shell">
      <header className="masthead">
        <a className="wordmark" href="#home">
          {site.name}
        </a>
        <nav aria-label="Main">
          <ul className="tabs">
            {TABS.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} aria-current={t.id === tab ? "page" : undefined}>
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main key={tab} className="page">
        <Page />
      </main>

      <footer className="footer">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <ul className="link-row">
          {site.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
