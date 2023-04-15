import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapLocation } from '@fortawesome/free-solid-svg-icons'

import Event1 from '../assets/event1.png'
import Event2 from '../assets/event2.png'
import Event3 from '../assets/event3.png'


const Event =()=>{
    return(
        <div className="ourEvent">
            <div className="title">
                <h3>Our Event</h3>
            </div>

            <div className="eventContent">
                <div className="card">
                    <div className="images">
                        <img src={Event1} alt="" />
                    </div>
                    <div className="cardTeks">
                        <ul className="times">
                            <li><FontAwesomeIcon icon={faClock} /> 08.00 AM - 20.00 PM</li>
                            <li><FontAwesomeIcon icon={faMapLocation} /> Sumedang</li>
                        </ul>
                        <h3>What Are Ramadhan Goals.?</h3>
                        <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam Possimus Modi.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="images">
                        <img src={Event2} alt="" />
                    </div>
                    <div className="cardTeks">
                        <ul className="times">
                            <li><FontAwesomeIcon icon={faClock} /> 08.00 AM - 20.00 PM</li>
                            <li><FontAwesomeIcon icon={faMapLocation} /> Sumedang</li>
                        </ul>
                        <h3>Tafseer Qur'an</h3>
                        <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam Possimus Modi.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="images">
                        <img src={Event3} alt="" />
                    </div>
                    <div className="cardTeks">
                        <ul className="times">
                            <li><FontAwesomeIcon icon={faClock} /> 08.00 AM - 20.00 PM</li>
                            <li><FontAwesomeIcon icon={faMapLocation} /> Sumedang</li>
                        </ul>
                        <h3>How To Achieve Havines</h3>
                        <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam Possimus Modi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event