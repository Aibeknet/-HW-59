import React, { useEffect, useState } from "react";
import FilmList from "../../components/FilmList/FilmList.tsx";
import AddFilm from "../../components/AddFilm/AddFilm";
import { Film } from "../../type.ts";

const FilmHub: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [newFilm, setNewFilm] = useState<string>("");

  useEffect(() => {
    const storeFilms = localStorage.getItem("films");
    if (storeFilms) {
      setFilms(JSON.parse(storeFilms) as Film[]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(films));
  }, [films]);

  const addFilm = () => {
    if (newFilm.trim()) {
      const film = { id: Date.now(), title: newFilm };
      setFilms((prev) => [...prev, film]);
      setNewFilm("");
    } else {
      alert("Enter the name of the film.");
    }
  };

  const editFilm = (id: number, title: string) => {
    setFilms((prev) =>
      prev.map((film) => (film.id === id ? { ...film, title } : film)),
    );
  };

  const deleteFilm = (id: number) => {
    setFilms((prev) => prev.filter((film) => film.id !== id));
  };

  return (
    <>
      <AddFilm newFilm={newFilm} setNewFilm={setNewFilm} addFilm={addFilm} />
      <FilmList films={films} onEdit={editFilm} onDelete={deleteFilm} />
    </>
  );
};

export default FilmHub;
