import React from "react";

const EventComponent: React.FC = () => {
  const onChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDraggedStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("onDraggedStart");
  };

  return (
    <div>
      <input type="text" onChange={onChanged} />

      <div draggable onDragStart={onDraggedStart}>
        Can Drag Me
      </div>
    </div>
  );
};

export default EventComponent;
