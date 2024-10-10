import React from "react";
import Joke from "../Joke/Joke";
import { JokeListProps } from "../../type.ts";

const JokeList: React.FC<JokeListProps> = ({ jokes }) => {
  return (
    <div className="mt-4">
      {jokes.map((joke, index) => (
        <Joke key={index} joke={joke} />
      ))}
    </div>
  );
};

export default JokeList;
