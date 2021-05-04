import "bootstrap/dist/css/bootstrap.min.css";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import { store } from "./PackSearch/state";

import "./index.css";
import Parent from "./components/Parent";
import FavList from "./playground/player";
import FindFavItem from "./components/FindFavItem";
import FindFavItemC from "./components/ClassBased/FindFavItemC";
import FindFavItemR from "./components/Refs/FindFavItemR";
import PackageSearcher from "./PackSearch/PackageSearcher";

const favItems = [
  { name: "iPhone", model: 12 },
  { name: "iPad", model: 2021 },
  { name: "macBook", model: 2020 },
];

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h2>React with TypeScript</h2>

        {/* <Parent /> */}

        {/* <FavList /> */}

        {/* <FindFavItem /> */}

        {/* <FindFavItemC favItems={favItems} /> */}

        {/* <FindFavItemR /> */}

        <PackageSearcher />
      </div>
    </Provider>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
