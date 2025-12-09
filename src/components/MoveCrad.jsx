import { memo, useCallback, useState } from 'react';
import FavoriteButton from './FavoriteButton';
import { ModalTrailer } from './UI/ModalTrailer';
import { Link } from 'react-router-dom';

function MoveCard({ ...movies }) {
  const [isOpenTrailer, setOpenTriler] = useState(false);
  const openTrailer = useCallback(() => {
    setOpenTriler(true);
  }, []);

  const titleMove = movies.title;
  const descriptionMove = movies.description;
  const imageMove = movies.img;
  const ratingMove = movies.rating;
  //   const urlMove = movies.url;
  const trailerVK = movies.trailerVK;

  return (
    <div
      className="relative w-[300px] rounded-2xl overflow-hidden
        bg-neutral-400 dark:bg-neutral-800 shadow-lg hover:scale-108 hover:translate-y-5 transition-transform
        will-change-transform duration-300">
      {isOpenTrailer && (
        <ModalTrailer
          onClose={() => {
            setOpenTriler(false);
          }}>
          <iframe
            src={`https://vkvideo.ru/video_ext.php?oid=-${trailerVK}&hd=3`}
            width="373"
            height="210"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameborder="0"
            allowfullscreen
          />
        </ModalTrailer>
      )}

      <div
        className="absolute top-0 left-0 w-full text-left
            bg-gradient-to-t from-neutral-400/00 to-white/100 
            dark:bg-gradient-to-t dark:from-black/00 dark:to-black/100 
            p-2 text-sm text-black dark:text-white font-semibold ">
        {titleMove}
      </div>
      <div
        className="absolute right-0 p-2  text-sm
            text-black dark:text-white font-semibold text-right">
        {' '}
        Рейтинг: {ratingMove}
      </div>
      <div className="absolute top-8 right-2 z-10">
        <FavoriteButton />
      </div>

      <img src={imageMove} alt={titleMove} onClick={openTrailer} className="w-[300px]  h-[400px] object-cover" />

      <div className="h-[120px] p-2 text-black dark:text-white text-justify">{descriptionMove}</div>
      {console.log(`/movie/${trailerVK}`)}
      <Link to={`/movie/${trailerVK}`} className="flex justify-center pt-2 pb-2 text-[1.5em] bg-black/50">
        Подробнее
      </Link>
    </div>
  );
}
export default memo(MoveCard);
