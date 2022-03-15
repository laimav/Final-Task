import Cards from "../Components/Cards";
import Carousel from "../Components/Carousel";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {

    return (
        <div>
            <Carousel />
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src="images/profile1lined.jpg" width="300" height="300" alt="..." />
                <h1 className="display-5 fw-bold">She Invests</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">This is my personal blog on making savings, investing and planning my financial future. My experience mixed together with advice and commentaries from professionals. Register for my newsletter and receive a lots of tips for creating basis of financial independence and letting the money work for you.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to="/register" className="btn btn-outline-secondary btn-lg px-4">Register</Link>
                    </div>
                </div>
            </div>
            <Cards />
        </div>
    )
}

export default Home;