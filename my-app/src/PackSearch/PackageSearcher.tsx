import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { actionCreators } from "./state";

const PackageSearcher: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const dispatch = useDispatch();

  const onClicked = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(term);
    e.preventDefault();

    dispatch(actionCreators.searchRepo(term));
  };

  return (
    <div>
      <h3>Search NPM Repo</h3>

      <form onSubmit={onClicked}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />

        <Button variant="dark" type="submit">
          Find
        </Button>
      </form>
    </div>
  );
};

export default PackageSearcher;
