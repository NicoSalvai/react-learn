import './carousel.css';
import Card from '../card/Card';
import cardsData from './cards.js'

export default function Carousel(){
    
    cardsData.sort((a,b) => b.reviews - a.reviews);

    const cardList = cardsData.map((element) => (
            <Card 
                img={element.img}
                status={element.status}
                stars={element.stars}     
                reviews={element.reviews}
                country={element.country}
                desc={element.desc}
                price={element.price}
             />
    ));

    return (
        <div className="carousel">
            {cardList}
        </div>
    )

}