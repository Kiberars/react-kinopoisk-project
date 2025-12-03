import { useState } from 'react';
import { MoveCard } from './components/MoveCrad'
import MOVIES from './data/dataMoves.json'
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [serachTerm, setSerachTerm] = useState('')
  const debouncedSearch = useDebounce(serachTerm,600)
  const moves =MOVIES.MOVIES.filter(movie => 
    movie.title.toLocaleLowerCase().includes(debouncedSearch.toLowerCase()))
  


  return (
    <div className='min-h-screen w-full bg-black text-withe px-6 py-5'>
    <header className='mb-10 flex items-center justify-between'>
    <img 
    src="/MoveImage/Kinopoisk_colored_logo.png" 
    alt="Кинопоиск" 
    className='h-8 w-auto'/>

    <input type="serach" 
    value={serachTerm} onChange={e => {setSerachTerm(e.target.value)}}
    placeholder='Поиск...'
    className='border borader-white/15 px-2 py-1 rounded outline-0'/>
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
