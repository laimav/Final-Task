import RegistrationForm from "../Components/RegistrationForm";


function Register() {

    return (
        <div>
            <div>
                <div className="mt-0 mb-4 top-block">
                    <div className="container">
                        <div className="row pt-1 mb-3 mt-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a className="link-none cart-breadcrumb-item" href="/">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Register</li>
                                </ol>
                            </nav>
                        </div>
                        <p className="display-5">Register</p>
                        <div className="title-line"></div>
                    </div>
                </div>
                <RegistrationForm />
            </div>
        </div >
    )
}

export default Register;