import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SkillInput = ({ skills, setSkills }) => {
  const [skill, setSkill] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const saveSkill = () => {
    if (!skill) return;

    if (editIndex !== null) {
      const updated = [...skills];
      updated[editIndex] = skill;
      setSkills(updated);
      setEditIndex(null);
    } else {
      setSkills([...skills, skill]);
    }

    setSkill("");
  };

  return (
    <div className="mb-3" id="projects">
      <h5>Skills</h5>

      <div className="input-group mb-2">
        <input
          className="form-control"
          value={skill}
          placeholder="Enter skill"
          onChange={(e) => setSkill(e.target.value)}
        />
        <button className="btn btn-primary" onClick={saveSkill}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul className="list-group">
        {skills.map((s, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between">
            {s}
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => {
                setSkill(s);
                setEditIndex(i);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillInput;