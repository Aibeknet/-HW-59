import React, { useState } from "react";
import FilmHub from "./containers/FIlmHub/FilmHub.tsx";
// import JokeManager from "./containers/JokeManager/JokeManager";

const App: React.FC = () => {
  const [page, setPage] = useState<boolean>(false);

  return (
    <div className="container mt-4">
      <FilmHub />
      <button
        onClick={() => setPage(!page)}
        className="btn my-3 me-3 btn-success"
      >
        Change ex
      </button>
      {/*{page ? <JokeManager /> : <MovieManager />}*/}
    </div>
  );
};

export default App;
