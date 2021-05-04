import React from "react";
import { Button } from "react-bootstrap";

interface FavItem {
  name: string;
  model: number;
}

export interface FavItemSearchProps {
  favItems: FavItem[];
}

interface FavItemState {
  favName: string;
  favItem: FavItem | undefined;
}

class FindFavItemC extends React.Component<FavItemSearchProps> {
  state: FavItemState = {
    favName: "",
    favItem: undefined,
  };

  onClicked = () => {
    const foundItem = this.props.favItems.find(
      (favItem) =>
        favItem.name.toUpperCase() === this.state.favName.toUpperCase()
    );

    this.setState(() => ({ favItem: foundItem }));
  };

  render() {
    const { favItem, favName } = this.state;

    return (
      <div>
        <h3>Find Fav Item</h3>

        <input
          type="text"
          value={favName}
          onChange={(e) => this.setState(() => ({ favName: e.target.value }))}
        />

        <Button variant="dark" onClick={this.onClicked}>
          Find
        </Button>

        {this.state.favItem && (
          <div className="my-2">
            <p>Name: {favItem?.name}</p>
            <p>Model: {favItem?.model}</p>
          </div>
        )}
      </div>
    );
  }
}

export default FindFavItemC;
