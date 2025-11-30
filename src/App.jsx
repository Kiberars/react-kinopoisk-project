import { MoveCard } from './components/MoveCrad'
import MOVIES from './data/dataMoves.json'

function App() {
 
 


  return (
    <div className='min-h-screen w-full bg-black text-withe px-6 py-5'>
    <header className='mb-10 flex items-center'>
    <img 
    src="/MoveImage/Kinopoisk_colored_logo.png" 
    alt="Кинопоиск" 
    className='h-8 w-auto'/>
    </header>
      <main className='flex gap-6'>
        {MOVIES.MOVIES.map((movie,index)=>(
          <div key={index}>           
            <MoveCard {...movie}/>
          </div>
        ))}        
      </main>      
    </div>
  );
};

export default App
