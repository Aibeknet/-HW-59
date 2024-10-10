import React, { useState } from "react";
import FilmHub from "./containers/FIlmHub/FilmHub.tsx";
import RandomJokeGenerator from "./containers/RandomJokeGenerator/RandomJokeGenerator";

const App: React.FC = () => {
  const [page, setPage] = useState<boolean>(false);

  return (
    <div className="container mt-4">
      <button
        onClick={() => setPage(!page)}
        className="btn my-3 me-3 btn-success"
      >
        Change Ex
      </button>
      {page ? <RandomJokeGenerator /> : <FilmHub />}
    </div>
  );
};

export default App;
