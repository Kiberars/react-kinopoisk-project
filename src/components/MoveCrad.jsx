export function MoveCard({titleMove, descriptionMove,imageMove, ratingMove}){
    return <div>
        <div>Рейтинг: {ratingMove}</div>
        <img src={imageMove} alt={titleMove}/>        
        <div>{descriptionMove}</div>
    </div>
}