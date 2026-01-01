import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
const PortfolioPreview = ({ form, skills, projects }) => {
  return (
    <div className="card p-3" id="preview">
      <h2>{form.name || "Your Name"}</h2>
      <h5 className="text-muted">{form.role || "Your Role"}</h5>

      <hr />

      <h5>About</h5>
      <p>{form.about}</p>
      <hr />

      <h5>Skills</h5>
      <ul>
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
      <hr />

      <h5>Projects</h5>
      {projects.map((p, i) => (
        <div key={i}>
          <strong>{p.title}</strong>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PortfolioPreview;