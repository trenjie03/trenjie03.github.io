import { projects } from "../content.js";
import { ProjectRow } from "../components.jsx";

export default function Projects() {
  return (
    <>
      <h1 className="page-title">Projects</h1>
      {projects.length > 0 ? (
        <div className="project-list">
          {projects.map((p) => (
            <ProjectRow key={p.title} project={p} showDetails />
          ))}
        </div>
      ) : (
        <p className="muted">Add projects in src/content.js to list them here.</p>
      )}
    </>
  );
}
