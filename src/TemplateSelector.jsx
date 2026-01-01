const TemplateSelector = ({ template, setTemplate }) => {
  const templates = ["modern", "minimal", "classic"];

  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Choose template</h3>
      <div className="flex gap-3">
        {templates.map((t) => (
          <button
            key={t}
            onClick={() => setTemplate(t)}
            className={`px-4 py-2 rounded border 
              ${template === t ? "bg-blue-600 text-white" : ""}`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;