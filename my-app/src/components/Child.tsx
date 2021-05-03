import React, { FC } from "react";

interface ChildProps {
  color: string;
  onClicked?: () => void;
}

const Child: FC<ChildProps> = ({ color, onClicked, children }) => {
  return (
    <div>
      <p style={{ color: color }}>I am a child {color}</p>

      <p>{children}</p>

      <button onClick={onClicked}>Click</button>
    </div>
  );
};

export default Child;
