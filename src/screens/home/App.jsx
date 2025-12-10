import { useMemo, useState } from 'react';
import MoveCard from './MoveCrad'
import MOVIES from '../../data/dataMoves.json'
import { useDebounce } from '../../hooks/useDebounce';
import { useTheme } from '../../hooks/useTheme';

function App() {
  const {theme, toggleTheme} = useTheme()

  const [serachTerm, setSerachTerm] = useState('')
  const debouncedSearch = useDebounce(serachTerm,500)

  
  const moves = useMemo(()=>{
    return MOVIES.MOVIES.filter(movie => 
    movie.title.toLocaleLowerCase().includes(debouncedSearch.toLowerCase()))
  },[debouncedSearch])
  
  
  


  return (
    <div>
    <header className='mb-10 flex items-center justify-between'>
    <img 
    src="/MoveImage/Kinopoisk_colored_logo.png" 
    alt="Кинопоиск" 
    className='h-8 w-auto'/>
    <div className='px-2'>
      <input type="serach" 
      value={serachTerm} onChange={e => {setSerachTerm(e.target.value)}}
      placeholder='Поиск...'
      className='border borader-white/15 px-2 py-2 rounded outline-0'/>
    
      <button onClick={toggleTheme} 
      className=' px-2 py-2 rounded outline-0 border  
      border-white/20  
      bg-black/40 hover:bg-black/80 border-white/15 text-black hover:text-white
      dark:bg-white/40 dark:hover:bg-white/80 dark:border-white/10 dark:text-white dark:hover:text-black
      transition w-20 ml-2'>
        {theme === 'dark'? 'light':'dark'}

      </button>
    
    </div>
    </header>
      <main className='flex gap-6'>
        {moves.length ? moves.map((movie,index)=>(
          <div key={index}>           
            <MoveCard {...movie}/>
          </div>
        )):
        <p>Фильмы не найдены!</p>}        
      </main>
      
    </div>
  );
};

export default App
