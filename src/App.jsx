import { MoveCard } from './components/MoveCrad'
import data from './data/dataMoves.json'

function App() {
 
 


  return (
    <>
      <div>
        {data.movies.map((movie,index)=>(
          <div key={index}>
           
            <MoveCard imageMove={movie.img} 
            titleMove={movie.title} 
            descriptionMove={movie.description}
            ratingMove={movie.rating}/>
          </div>
        ))}        
      </div>      
    </>
  );
};

export default App
