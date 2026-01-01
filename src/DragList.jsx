import { useState } from "react";

const DragList = ({ items, setItems, title }) => {
  const [dragIndex, setDragIndex] = useState(null);

  const onDragStart = (index) => setDragIndex(index);

  const onDrop = (index) => {
    let updated = [...items];
    const [removed] = updated.splice(dragIndex, 1);
    updated.splice(index, 0, removed);
    setItems(updated);
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">{title}</h3>

      {items.map((item, i) => (
        <div
          key={i}
          draggable
          onDragStart={() => onDragStart(i)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => onDrop(i)}
          className="p-2 border rounded mb-2 cursor-move bg-gray-50"
        >
          {item.title || item}
        </div>
      ))}
    </div>
  );
};

export default DragList;