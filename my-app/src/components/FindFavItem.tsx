import React, { useState } from "react";
import { Button } from "react-bootstrap";

const favItems = [
  { name: "iPhone", model: 12 },
  { name: "iPad", model: 2021 },
  { name: "macBook", model: 2020 },
];

const FindFavItem: React.FC = () => {
  const [favName, setFavName] = useState("");
  const [favItem, setFavItem] = useState<
    { name: string; model: number } | undefined
  >();

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

export default FindFavItem;
