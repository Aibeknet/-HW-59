import React from "react";
import { AddFilmProps } from "../../type.ts";

const AddFilm: React.FC<AddFilmProps> = ({ newFilm, setNewFilm, addFilm }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addFilm();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={newFilm}
          onChange={(e) => setNewFilm(e.target.value)}
          placeholder="The name of the film"
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
      <h2 className="my-3">To watch list</h2>
    </form>
  );
};

export default AddFilm;
