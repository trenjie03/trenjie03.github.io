// Small shared pieces used by more than one page.

export function ProjectRow({ project, showDetails = false }) {
  const { title, year, summary, details, tags, image, links } = project;
  return (
    <article className="project">
      <p className="project-year">{year}</p>
      <div className="project-body">
        <h3>{title}</h3>
        <p className="project-summary">{summary}</p>
        {showDetails && details && <p className="project-details">{details}</p>}
        {showDetails && image && (
          <img className="project-image" src={image} alt={title} loading="lazy" />
        )}
        {tags?.length > 0 && (
          <ul className="tags" aria-label="Tools and topics">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        {links?.length > 0 && (
          <ul className="link-row">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
