import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'


import Cause1 from '../assets/cause1.png'
import Cause2 from '../assets/cause2.png'
import Cause3 from '../assets/cause3.png'



const Causes =()=>{
    return(
        <div className="ourCauses">
            <div className="title">
                <h3>Our Causes</h3>
            </div>

            <div className="causesContent">
                <div className="card">
                    <div className="images">
                        <img src={Cause1} alt="" />
                    </div>
                    <div className="cardTeks">
                        <h3>Health Care Support</h3>
                        <FontAwesomeIcon icon={faCalendar} />  14 Februari 2023
                        <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam Possimus Modi.</p>
                        <ul className="price">
                            <li>Raised : $1000 </li>
                            <li>Goal : $2000 </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="images">
                        <img src={Cause2} alt="" />
                    </div>
                    <div className="cardTeks">
                        <h3>Donate School</h3>
                        <FontAwesomeIcon icon={faCalendar} />  14 Februari 2023
                        <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam Possimus Modi.</p>
                        <ul className="price">
                            <li>Raised : $1000 </li>
                            <li>Goal : $2000 </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="images">
                        <img src={Cause3} alt="" />
                    </div>
                    <div className="cardTeks">
                        <h3>Shelter Home</h3>
                        <FontAwesomeIcon icon={faCalendar} />  14 Februari 2023
                        <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam Possimus Modi.</p>
                        <ul className="price">
                            <li>Raised : $1000 </li>
                            <li>Goal : $2000 </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Causes