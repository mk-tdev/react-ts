import ReactDom from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Parent from "./components/Parent";

const App = () => {
  return (
    <div>
      <h2>React with TypeScript</h2>

      <Parent />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
