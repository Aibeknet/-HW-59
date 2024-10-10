import React, { useState, useEffect } from "react";
import { FilmItemProps } from '../../type.ts';

const FilmItem: React.FC<FilmItemProps> = React.memo(({ film, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(film.title);

  useEffect(() => {
    setCurrentTitle(film.title);
  }, [film.title]);

  const handleEdit = () => {
    onEdit(film.id, currentTitle);
    setIsEditing(false);
  };

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <>
          <input
            type="text"
            className="form-control"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEdit();
              }
            }}
          />
          <button className="btn btn-success ml-2" onClick={handleEdit}>
            Save
          </button>
        </>
      ) : (
        <>
          <span>{film.title}</span>
          <button className="btn btn-info ml-2" onClick={() => {
            setCurrentTitle(film.title);
            setIsEditing(true);
          }}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(film.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
});

export default FilmItem;
