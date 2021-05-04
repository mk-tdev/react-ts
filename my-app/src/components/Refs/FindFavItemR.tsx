import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";

const favItems = [
  { name: "iPhone", model: 12 },
  { name: "iPad", model: 2021 },
  { name: "macBook", model: 2020 },
];

const FindFavItemR: React.FC = () => {
  const [favName, setFavName] = useState("");
  const [favItem, setFavItem] = useState<
    { name: string; model: number } | undefined
  >();

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onClicked = () => {
    const foundItem = favItems.find(
      (favItem) => favItem.name.toUpperCase() === favName.toUpperCase()
    );
    setFavItem(foundItem);
  };

  return (
    <div>
      <h3>Find Fav Item</h3>

      <input
        ref={inputRef}
        type="text"
        value={favName}
        onChange={(e) => setFavName(e.target.value)}
      />

      <Button variant="dark" onClick={onClicked}>
        Find
      </Button>

      {favItem && (
        <div className="my-2">
          <p>Name: {favItem.name}</p>
          <p>Model: {favItem.model}</p>
        </div>
      )}
    </div>
  );
};

export default FindFavItemR;
