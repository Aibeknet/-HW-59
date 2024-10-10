import React from "react";
import { FilmListProps } from '../../type.ts';
import FilmItem from '../FilmItem/FilmItem.tsx';



const FilmList: React.FC<FilmListProps> = ({ films, onEdit, onDelete }) => {
  return (
    <div className="list-group">
      {films.map((film) => (
        <FilmItem key={film.id} film={film} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default FilmList;
