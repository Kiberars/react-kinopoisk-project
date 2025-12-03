import { useState } from 'react';
import { MoveCard } from './components/MoveCrad'
import MOVIES from './data/dataMoves.json'
import { useDebounce } from './hooks/useDebounce';
import { useTheme } from './hooks/useTheme';

function App() {
  const {theme, toggleTheme} = useTheme()

  const [serachTerm, setSerachTerm] = useState('')
  const debouncedSearch = useDebounce(serachTerm,600)
  const moves =MOVIES.MOVIES.filter(movie => 
    movie.title.toLocaleLowerCase().includes(debouncedSearch.toLowerCase()))
  


  return (
    <div className='min-h-screen w-full bg-white dark:bg-black text-black dark:text-white px-6 py-5'>
    <header className='mb-10 flex items-center justify-between'>
    <img 
    src="/MoveImage/Kinopoisk_colored_logo.png" 
    alt="Кинопоиск" 
    className='h-8 w-auto'/>
    <div>
      <input type="serach" 
      value={serachTerm} onChange={e => {setSerachTerm(e.target.value)}}
      placeholder='Поиск...'
      className='border borader-white/15 px-2 py-1 rounded outline-0'/>
    
      <button onClick={toggleTheme} 
      className='text-sm px-3 py-1 rounded border 
      border-white/20  
      bg-black hover:bg-white border-white/15 text-white hover:text-black
      dark:bg-white dark:hover:bg-black dark:border-white/10 dark:text-black dark:hover:text-white
      transition w-20'>
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
