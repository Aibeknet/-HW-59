export interface Film {
  id: number;
  title: string;
}

export interface AddFilmProps {
  newFilm: string;
  setNewFilm: React.Dispatch<React.SetStateAction<string>>;
  addFilm: () => void;
}

// export interface MovieItemProps {
//   movie: Movie;
//   onEdit: (id: number, title: string) => void;
//   onDelete: (id: number) => void;
// }
//
// export interface MovieListProps {
//   movies: Movie[];
//   onEdit: (id: number, title: string) => void;
//   onDelete: (id: number) => void;
// }
