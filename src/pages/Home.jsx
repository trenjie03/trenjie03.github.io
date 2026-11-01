import { site, home, projects } from "../content.js";
import { ProjectRow } from "../components.jsx";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section className="hero">
        <h1>{site.name}</h1>
        <p className="lede">{site.role}</p>
      </section>

      <section className="prose">
        {home.intro.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        {home.now && <p className="now">{home.now}</p>}
      </section>

      {featured.length > 0 && (
        <section>
          <div className="section-head">
            <h2>Selected projects</h2>
            <a href="#projects">See all</a>
          </div>
          <div className="project-list">
            {featured.map((p) => (
              <ProjectRow key={p.title} project={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
