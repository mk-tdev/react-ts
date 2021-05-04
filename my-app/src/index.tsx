import ReactDom from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Parent from "./components/Parent";
import FavList from "./playground/player";
import FindFavItem from "./components/FindFavItem";
import FindFavItemC from "./components/ClassBased/FindFavItemC";
import FindFavItemR from "./components/Refs/FindFavItemR";

const favItems = [
  { name: "iPhone", model: 12 },
  { name: "iPad", model: 2021 },
  { name: "macBook", model: 2020 },
];

const App = () => {
  return (
    <div>
      <h2>React with TypeScript</h2>

      {/* <Parent /> */}

      {/* <FavList /> */}

      {/* <FindFavItem /> */}

      {/* <FindFavItemC favItems={favItems} /> */}

      <FindFavItemR />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
