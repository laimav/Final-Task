import getArticles from "../Data/getArticles";
import { Link } from "react-router-dom";
import { useState } from "react";

function ArticlesList() {

    const articles = getArticles()

    const [startList, setStartList] = useState(0)
    const endList = startList + 3

    const moveLeft = () => {
        let nextSelected = startList - 3
        if (nextSelected < 0) {
            nextSelected = 0
        }
        setStartList(nextSelected)
    }
    const moveRight = () => {
        let nextSelected = startList + 3
        if (nextSelected > 6) {
            nextSelected = 6
        }
        setStartList(nextSelected)
    }
    const changePageOne = () => {
        setStartList(0)
    }
    const changePageTwo = () => {
        setStartList(3)
    }
    const changePageThree = () => {
        setStartList(6)
    }

    const articlesList = articles.slice(startList, endList).map((article, index) => {

        return (
            <div key={index} className="col-md-12">
                <div className="row m-0">
                    <div className="card mb-5 article-item">
                        <div className="row g-0">
                            <div className="col-md-3 py-3">
                                <img src={article.image1} className="img-fluid"/>
                            </div>
                            <div className="col-md ps-2">
                                <div className="card-body">
                                    <p className="card-title fs-3">
                                    <Link to={`/articles/${startList+index}`} className="link-none">{article.title}</Link></p>
                                    <p>{article.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="container mt-4">
                <div className="row justify-content-around">
                    {articlesList}
                </div>
                <div className="row">
                    <div className="col mb-4">
                        <div className="btn-group float-end" role="group">
                            <button onClick={() => moveLeft(startList)} type="button" className="btn btn-outline-dark">‹‹</button>
                            <button onClick={() => changePageOne(startList)} type="button" className="btn btn-outline-dark">1</button>
                            <button onClick={() => changePageTwo(startList)} type="button" className="btn btn-outline-dark">2</button>
                            <button onClick={() => changePageThree(startList)} type="button" className="btn btn-outline-dark">3</button>
                            <button onClick={() => moveRight(startList)} type="button" className="btn btn-outline-dark">››</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlesList;