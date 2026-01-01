import { useState } from "react";
import SkillInput from "./SkillInput";
import ProjectInput from "./ProjectInput";
import PortfolioPreview from "./PortfolioPreview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";

const PortfolioCreator = () => {
  const [form, setForm] = useState({ name: "", role: "", about: "" });
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  const downloadPDF = () => {
    const input = document.getElementById("portfolio-preview");
    html2canvas(input).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(img, "PNG", 10, 10, 190, 270);
      pdf.save("portfolio.pdf");
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        
        <div className="" id="creater">
          <h3>Portfolio Creator</h3>

          <input
            className="form-control mb-2"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="form-control mb-2"
            placeholder="Role"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          />

          <textarea
            className="form-control mb-3"
            placeholder="About"
            rows="3"
            onChange={(e) => setForm({ ...form, about: e.target.value })}
          />

          <SkillInput skills={skills} setSkills={setSkills} />
          <ProjectInput projects={projects} setProjects={setProjects} />

          
        </div>
        <hr />
        <hr />

      
        <div className="">
          <div id="portfolio-preview">
            <PortfolioPreview
              form={form}
              skills={skills}
              projects={projects}
            />
          </div>
          <button className="btn btn-success mt-3 p-3 d-block mx-auto" onClick={downloadPDF}>
            Download PDF
          </button>
        </div>
        

      </div>
    </div>
  );
};

export default PortfolioCreator;