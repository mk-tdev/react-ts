import React, { useState } from "react";
import { Alert, Button, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useRepoActions } from "./hooks/useRepoActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

const PackageSearcher: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const { searchRepo } = useRepoActions();
  // const state = useSelector((state: any) => state.repos);
  const { data, loading, error } = useTypedSelector((state) => state.repos);

  const onClicked = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(term);
    e.preventDefault();

    searchRepo(term);
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

      {error && (
        <Alert className="my-3" variant="danger">
          Encountered {error}
        </Alert>
      )}
      {loading && (
        <Alert className="my-3" variant="info">
          Loading Please wait!
        </Alert>
      )}

      <ListGroup className="my-3">
        {data.map((d, index) => (
          <ListGroup.Item key={`${index + 1}${d}`}>{`${
            index + 1
          }: ${d}`}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default PackageSearcher;
