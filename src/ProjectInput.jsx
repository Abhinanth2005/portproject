import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectInput = ({ projects, setProjects }) => {
  const [project, setProject] = useState({ title: "", description: "" });
  const [editIndex, setEditIndex] = useState(null);

  const saveProject = () => {
    if (!project.title) return;

    if (editIndex !== null) {
      const updated = [...projects];
      updated[editIndex] = project;
      setProjects(updated);
      setEditIndex(null);
    } else {
      setProjects([...projects, project]);
    }

    setProject({ title: "", description: "" });
  };

  return (
    <div className="mb-3">
      <h5>Projects</h5>

      <input
        className="form-control mb-2"
        placeholder="Project Title"
        value={project.title}
        onChange={(e) => setProject({ ...project, title: e.target.value })}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Project Description"
        value={project.description}
        onChange={(e) =>
          setProject({ ...project, description: e.target.value })
        }
      />

      <button className="btn btn-primary mb-2" onClick={saveProject}>
        {editIndex !== null ? "Update" : "Add Project"}
      </button>

      {projects.map((p, i) => (
        <div key={i} className="border p-2 mb-2">
          <strong>{p.title}</strong>
          <p>{p.description}</p>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => {
              setProject(p);
              setEditIndex(i);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectInput;