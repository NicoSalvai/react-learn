import './carousel.css';
import Card from '../card/Card';
import data from './cards.js'

export default function Carousel(){
    
    data.sort((a,b) => b.reviews - a.reviews);

    const cardList = data.map((element) => (
            <Card 
                key={element.id}
                img={element.img}
                openSpots={element.openSpots}
                stars={element.stats.rating}     
                reviews={element.stats.reviewCount}
                country={element.location}
                desc={element.title}
                price={element.price}
             />
    ));

    return (
        <div className="carousel">
            {cardList}
        </div>
    )

}