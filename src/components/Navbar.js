import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar =()=>{
    return(
        <div className="navs">
            <div className="logo">
                <ul>
                    <li><img src={Logo} alt="" /></li>
                    <li><h3>SIRAJ</h3> <h4>ISLAMIC CENTER</h4></li>
                </ul>
            </div>

            <div className="navigation">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Event</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="navigationIcn">
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faUser} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
                    <li><button>Donate</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar