import { NavLink, Link } from "react-router-dom"
import "./Header.css"

function Header() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-light nav-background">
                <div className="container">
                    <div className="navbar-brand">
                        <img src="/images/logo1.png" width="24" height="24" className="d-inline-block align-text-top me-2" />
                        <Link className="navbar-brand fw-bold" to="/">SHE INVESTS</Link>
                    </div>
                    <ul className="nav justify-content-center">
                        <li className="nav-item navigate-home">
                            <NavLink className="nav-link" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item navigate-home">
                            <NavLink className="nav-link" to='/articles'>Articles</NavLink>
                        </li>
                        <li className="nav-item navigate-home">
                            <NavLink className="nav-link" to='/chat'>Chat</NavLink>
                        </li>
                        <li className="nav-item navigate-home">
                            <NavLink className="nav-link" to='/register'>Register</NavLink>
                        </li>
                        <li className="nav-item navigate-home">
                            <NavLink className="nav-link" to='/aboutUs'>About us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Header;