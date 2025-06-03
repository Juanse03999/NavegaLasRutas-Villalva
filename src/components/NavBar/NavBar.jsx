import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

function NavBar() {
    return (
        <>
        <nav className="navbar">
            <div>
                <a href="./index.html"><img className="logo" src="../src/assets/logo.svg" alt="logo" /></a>
            </div>

            <ul className="navbar-links">
                <li className="navbar-item"><a href="#">Home</a></li>
                <li className="navbar-item"><a href="#">Remeras</a></li>
                <li className="navbar-item"><a href="#">Pantalones</a></li>
            </ul>

            <CartWidget/>
        </nav>
        </>
    )
}

export default NavBar