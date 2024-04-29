import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <menu>
                <li className="img-footer">
                    <img src={require("../assets/footer-logo.png")} alt="Little Lemon logo" />
                </li>
                <li className="contact">
                    <h1 className="footer-header">Navigation</h1>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><a href={require("../assets/menu.webp")} target="_blank" rel="noreferrer">Menu</a></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/order">Order</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </li>

                <li>
                    <h1 className="footer-header">Contact</h1>
                    <ul className="footer-links">
                        <li>2395 Maldove Way,</li>
                        <li>Chicago Illinois</li>
                        <br />
                        <li>(629)-243-6827</li>
                        <br />
                        <li><a href="mailto:info@littlelemon.com" target="_blank" rel="noreferrer">info@littlelemon.com</a></li>
                    </ul>
                </li>
                <li>
                    <h1 className="footer-header">Connect</h1>
                    <ul className="footer-links">
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Join us!</a></li>
                    </ul>
                </li>
            </menu>
        </footer>
    );
}
