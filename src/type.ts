export interface Film {
  id: number;
  title: string;
}

export interface AddFilmProps {
  newFilm: string;
  setNewFilm: (film: string) => void;
  addFilm: () => void;
}

export interface FilmItemProps {
  film: Film;
  onEdit: (id: number, title: string) => void;
  onDelete: (id: number) => void;
}


export interface FilmListProps {
  films: Film[];
  onEdit: (id: number, title: string) => void;
  onDelete: (id: number) => void;
}

export interface JokeProps {
  joke: string;
  disabled?: boolean;
}
