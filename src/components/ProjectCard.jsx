/* Reusable ProjectCard component — accepts title and desc props */
function ProjectCard({ title, desc }) {
  return (
    <div className="project-card">
      <div className="card-accent"></div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default ProjectCard;
