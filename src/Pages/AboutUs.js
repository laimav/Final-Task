import "./AboutUs.css"
import getAboutUsTabs from "../Data/getAboutUsTabs";


function AboutUs() {

    const tabs = getAboutUsTabs();

    const tabList = tabs.map((tab, index) => {
        let className = "nav-link link-none";
        if (index == 0) {
            className += " active";
        }
        return (
            <li className="nav-item" role="presentation" key={index}>
                <button className={className} id="products-tab" data-bs-toggle="tab" data-bs-target={"#" + tab.id} type="button" role="tab" aria-controls="home" aria-selected="true"><h6>{tab.title}</h6></button>
            </li>
        )
    })

    const tabContentList = tabs.map((tab, index) => {
        let className = "tab-pane fade";
        if (index == 0) {
            className += " active show";
        }

        return (
            <div className={className} role="tabpanel" id={tab.id} key={index}>
                <div className="row mx-0">
                    <div className="col-md-4 py-3 ps-4 white-backgr">
                        <img src={tab.imageUrl} className="img-fluid rounded" alt="..." />
                    </div>
                    <div className="col-md-8 py-3 pe-4 white-backgr">
                        <p>{tab.description}</p>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="mt-0 mb-4 top-block">
                <div className="container">
                    <div className="row pt-1 mb-3 mt-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a className="link-none cart-breadcrumb-item" href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">About us</li>
                            </ol>
                        </nav>
                    </div>
                    <p className="display-5">About us</p>
                    <div className="title-line"></div>
                </div>
            </div>
            <div className="container mb-5">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {tabList}
                </ul>
                <div className="tab-content" id="myTabContent">
                    {tabContentList}
                </div>
            </div>
            <div className="container my-4">
                <p className="display-6">Contacts</p>
            </div>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-5">
                        <iframe className="map-dimensions"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17407.00090940964!2d24.08341943849479!3d56.95094090641612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfda370231eb%3A0xff365adc6ac1f7cc!2sPils%20iela%203%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1050!5e0!3m2!1slv!2slv!4v1637697915672!5m2!1slv!2slv"
                        ></iframe>
                    </div>
                    <div className="col-md-7">
                        <h6>Adress:</h6>
                        <p>Pils laukums 3, Rīga, LV-1050, Latvija</p>
                        <h6>E-mail:</h6>
                        <p><a className="link-none" href="mailto:info@rigacyclinggirls.com">info@sheinvests.com</a></p>
                        <h6>Phone:</h6>
                        <p>+371 29246357</p>
                        <h6>Social media:</h6>
                        <p>
                            <a href="https://www.facebook.com/" target="_blank"><img src="images/facebook.png" width="20"
                                class="d-inline-block me-2" /></a>
                            <a href="https://www.instagram.com/" target="_blank"><img src="images/instagram.png" width="20"
                                class="d-inline-block me-2" /></a>
                            <a href="https://www.pinterest.com/" target="_blank"><img src="images/pinterest.png" width="20"
                                class="d-inline-block me-2" /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs;