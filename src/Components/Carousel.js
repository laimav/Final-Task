import "./Carousel.css"
import { Link } from "react-router-dom";


function Carousel() {
    return (
        <div>
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/carousel1.jpg" className="d-block w-100" alt="Image-1" />
                            <div className="container">
                                <div className="carousel-caption text-end">
                                    <h1>Plan your financial future</h1>
                                    <p>You can start making savings and investing at any time.</p>
                                    <p><Link to="/articles" className="link-none btn bg-transparent btn-carousel">Read more</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/carousel2.jpg" className="d-block w-100" alt="Image-2" />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Start with small amounts</h1>
                                    <p>Some representative placeholder content for the second slide of the carousel.</p>
                                    <p><Link to="/articles" className="link-none btn bg-transparent btn-carousel">Read more</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/carousel3.jpg" className="d-block w-100" alt="Image-3" />
                            <div className="container">
                                <div className="carousel-caption text-start">
                                    <h1>Diversify your investment portfolio</h1>
                                    <p>Some representative placeholder content for the third slide of this carousel.</p>
                                    <p><Link to="/articles" className="link-none btn bg-transparent btn-carousel">Read more</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div >
    )
}
export default Carousel;