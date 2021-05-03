import React, { useState } from "react";
import { Button } from "react-bootstrap";

const FavList: React.FC = () => {
  const [favName, setFavName] = useState("");
  const [favItems, setFavItems] = useState<string[]>([]);

  const onClicked = () => {
    setFavName("");
    setFavItems([...favItems, favName]);
  };

  return (
    <div>
      <h3>Fav Items</h3>

      {favItems.map((favItem) => (
        <p key={favItem}>{favItem}</p>
      ))}

      <input type="text" onChange={(e) => setFavName(e.target.value)} />
      
      <Button variant="primary" onClick={onClicked}>
        Add Item
      </Button>
    </div>
  );
};

export default FavList;
