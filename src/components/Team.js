import Team1 from '../assets/team1.png'
import Team2 from '../assets/team2.png'
import Team3 from '../assets/team3.png'
import Team4 from '../assets/team4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'





const Team =()=>{
    return(
        <div className="ourTeam">
            <div className="title">
                <h3>Our Team</h3>
            </div>

            <div className="teamContent">
                <div className="card">
                    <img src={Team1} alt="" />

                    <div className="teks">
                        <h4>Saleem Yusuf</h4>
                        <p>Volunteer</p>

                        <div className="sci">
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={Team2} alt="" />

                    <div className="teks">
                        <h4>Zakir Khan</h4>
                        <p>Volunteer</p>

                        <div className="sci">
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={Team3} alt="" />

                    <div className="teks">
                        <h4>Shumaila Mustaq</h4>
                        <p>Volunteer</p>

                        <div className="sci">
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={Team4} alt="" />

                    <div className="teks">
                        <h4>Shahna Sohail</h4>
                        <p>Volunteer</p>

                        <div className="sci">
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team