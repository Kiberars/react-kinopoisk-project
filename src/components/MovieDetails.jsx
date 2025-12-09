import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import MOVIES from '.././data/dataMoves.json';

export function MovieDetails() {
  const { id } = useParams();
  const movie = useMemo(() => {
    return MOVIES.MOVIES.find((movie) => movie.trailerVK === id);
  }, [id]);

  if (!movie) return <p>Фильмы не найдены!</p>;

  return (
    <div>
      <img src={movie.img} alt="Movie Poster" className="w-full h-auto object-cover" />
      <h1>Карточка фильма #{id}</h1>
      <h2>{movie.title}</h2>
    </div>
  );
}
