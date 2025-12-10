import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import MOVIES from '../../data/dataMoves.json';
import { ModalTrailer } from '../../components/UI/ModalTrailer';
import { MovieComments } from './MovieComments';

export function MovieDetails() {
  const { id } = useParams();
  const movie = useMemo(() => {
    return MOVIES.MOVIES.find((movie) => movie.trailerVK === id);
  }, [id]);

  if (!movie) return <p className='text-center mt-10 text-gray-400'>Фильмы не найдены!</p>;

  return (
    <div className='min-h-screen bg-(--white-bg) dark:bg-(--black-bg) text-black dark:text-white'>
      <div className='flex flex-col md:flex-row gap-10 items-start'>
        <img src={movie.img} alt={movie.title} className="w-2/3 md:w-1/3 rounded-xl shadow-lg object-cover" />
        <div className='flex-1 space-y-4'>
          <h1 className='text-4xl font-bold'>{movie.title}</h1>
          <div className='flex md:flex-row gap-4'>
          <p className='text-xl flex-col'>Рейтинг: {movie.rating}</p>
          {movie.rating>8 ? <p className='text-xl '>⭐⭐⭐⭐⭐</p>                  
          : 
          movie.rating>6 ?
          <p className='text-xl '>⭐⭐⭐⭐</p>    
          :
          movie.rating>4 ?
          <p className='text-xl '>⭐⭐⭐</p>    
          :
          movie.rating>2 ?
          <p className='text-xl '>⭐⭐</p>    
          :         
          <p className='text-xl '>⭐</p>              
         }
          </div>
          <div className='text-sm'>
            <p>{movie.description}</p>
          </div>
                 <MovieComments />
        </div>

      </div>     
    </div>
  );
}
