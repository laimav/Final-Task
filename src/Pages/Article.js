import "./Articles.css"
import { Link, useParams } from "react-router-dom"
import getArticleByIndex from "../Data/getArticleByIndex"

function Article() {
  const { index } = useParams()
  const article = getArticleByIndex(index)

  return (
    <div>
      <div>
        <div className="mt-0 mb-4 top-block">
          <div className="container">
            <div className="row pt-1 mb-3 mt-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a className="link-none cart-breadcrumb-item" href="/">Home</a></li>
                  <li className="breadcrumb-item"><a className="link-none cart-breadcrumb-item" href="/articles">Articles</a></li>
                  <li className="breadcrumb-item active" aria-current="page">{article.title}</li>
                </ol>
              </nav>
            </div>
            <p className="display-5">{article.title}</p>
            <div className="title-line"></div>
          </div>
        </div>
        <div className="container container-height">
          <div className="row">
            <div className="col-4">
              <div className="row">
                <div className="col">
                  <img src={article.image1} className="img-fluid img-thumbnail" data-fancybox="gallery" />
                </div>
              </div>
              <div className="row">
                <div className="col-md mt-4">
                  <img src={article.image2} className="img-fluid img-thumbnail" data-fancybox="gallery" />
                </div>
                <div className="col-md mt-4">
                  <img src={article.image3} className="img-fluid img-thumbnail" data-fancybox="gallery" />
                </div>
                <div className="col-md mt-4">
                  <img src={article.image4} className="img-fluid img-thumbnail" data-fancybox="gallery" />
                </div>
              </div>
              <div className="row">
                <div className="col-md mt-4">
                  <img src={article.image5} className="img-fluid img-thumbnail" data-fancybox="gallery" />
                </div>
                <div className="col-md mt-4">
                  <img src={article.image6} className="img-fluid img-thumbnail" data-fancybox="gallery" />
                </div>
                <div className="col-md mt-4 mb-5">
                  <img src={article.image7} className="img-fluid img-thumbnail" data-fancybox="gallery" />
                </div>
              </div>
            </div>
            <div className="col-8">
              <p>{article.description}</p>
              <p>{article.description}</p>
              <p>{article.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article;