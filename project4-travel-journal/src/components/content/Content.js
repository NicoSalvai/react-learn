import Banner from "../banner/Banner"
import data from "../../data/data"

export default function Content() {

    let banners = data.map( item => (
        <Banner key={item.title} {...item}/>
    ))
    
    return (
        <div className="content">
            {banners}
        </div>
    )
}