import React from "react";
import { JokeProps } from "../../type.ts";

const Joke: React.FC<JokeProps> = ({ joke }) => {
  return <div className="alert alert-info">{joke}</div>;
};

export default Joke;
