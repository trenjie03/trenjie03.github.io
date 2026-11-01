import { site, about } from "../content.js";

function Timeline({ heading, entries }) {
  if (!entries?.length) return null;
  return (
    <section>
      <h2>{heading}</h2>
      <ol className="timeline">
        {entries.map((e, i) => (
          <li key={i}>
            <p className="timeline-period">{e.period}</p>
            <div>
              <p className="timeline-title">{e.title}</p>
              <p className="muted">{e.org}</p>
              {e.note && <p className="timeline-note">{e.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function About() {
  return (
    <>
      <h1 className="page-title">About</h1>

      <section className={about.photo ? "about-intro has-photo" : "about-intro"}>
        {about.photo && <img className="portrait" src={about.photo} alt={site.name} />}
        <div className="prose">
          {about.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      <Timeline heading="Experience" entries={about.experience} />
      <Timeline heading="Education" entries={about.education} />

      {about.skills?.length > 0 && (
        <section>
          <h2>Skills</h2>
          <dl className="skills">
            {about.skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section>
        <h2>Contact</h2>
        <p>
          The best way to reach me is by email at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>
    </>
  );
}
