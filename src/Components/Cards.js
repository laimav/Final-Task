import getCards from "../Data/getCards";
import { Link } from "react-router-dom";

function Cards() {

    const cards = getCards()
    const cardList = cards.map((card, index) => {

        return (
            <div key={index} className="col-md-4 mb-4">
                <div className="card">
                    <img src={card.imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title"><Link to={`/articles/${index}`} className="link-none">{card.title}</Link></h5>
                        <p className="card-text">{card.description}</p>
                        <Link to={`/articles/${index}`} className="btn btn-custom">Read more</Link>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    {cardList}
                </div>
            </div>
        </div>
    )
}

export default Cards;