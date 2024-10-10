import React, { useCallback, useState } from "react";
import FetchJokeButton from "../../components/FetchJokeButton/FetchJokeButton";
import JokeList from "../../components/JokeList/JokeList";

const RandomJokeGenerator: React.FC = () => {
  const [jokes, setJokes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchJokes = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);

    const jokeRequests = Array.from({ length: 5 }, () =>
      fetch("https://api.chucknorris.io/jokes/random"),
    );

    const responses = await Promise.all(jokeRequests);
    const jokesData = await Promise.all(responses.map((res) => res.json()));
    setJokes(jokesData.map((joke) => joke.value));

    setIsLoading(false);
  }, [isLoading]);

  return (
    <>
      <FetchJokeButton onFetch={fetchJokes} disabled={isLoading} />
      <JokeList jokes={jokes} />
    </>
  );
};

export default RandomJokeGenerator;
