import './carousel.css';
import Card from '../card/Card';
import img1 from '../../images/carrousel/carrousel1.png'
import img2 from '../../images/carrousel/carrousel2.png'
import img3 from '../../images/carrousel/carrousel3.png'

export default function Carousel(){
    return (
        <div className="carousel">
            <Card 
                img={img1}
                status="sold out"
                stars="5.0"
                nationality="(6) - USA "
                desc="Life lessons with Katie Zaferes"
                price="From $136"
            />
            <Card 
                img={img2}
                status="online"
                stars="5.0"
                nationality="(30) - USA "
                desc="Learn wedding photography"
                price="From $125"
            />
            <Card 
                img={img3}
                status="online"
                stars="4.8"
                nationality="(2) - USA "
                desc="Group Mountain Biking"
                price="From $50"
            />
        </div>
    )
}