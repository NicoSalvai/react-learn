import './carousel.css';
import Card from '../card/Card';
import data from './cards.js'

export default function Carousel(){
    
    data.sort((a,b) => b.reviews - a.reviews);

    const cardList = data.map((element) => (
            <Card 
                key={element.id}
                card={element}
             />
    ));

    return (
        <div className="carousel">
            {cardList}
        </div>
    )

}