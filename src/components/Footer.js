import Logo from '../assets/logo.png'



const Footer =()=>{
    return(
        <div className="footers">
            <div className="overlay"></div>
            <div className="footer-1">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <p>We Teach, Model, And Encourage A Love Of Learning And Combine Quranic Teachings With Computer Science And Other Modern Disciplines.</p>
            </div>
            <div className="footer-1">
                <ul>
                    <li><h3><a href="#">Our Service</a></h3></li>
                    <li><a href="#">Learning Qur'an</a></li>
                    <li><a href="#">Marriage Service</a></li>
                    <li><a href="#">Counselling</a></li>
                    <li><a href="#">Community Service</a></li>
                    <li><a href="#">Mosque Development</a></li>
                </ul>
            </div>
            <div className="footer-1">
            <ul>
                    <li><h3><a href="#">Useful Links</a></h3></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Event</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-1">
            <ul>
                    <li><h3><a href="#">Contact Info</a></h3></li>
                    <li><a href="#">ndev@gmail.com</a></li>
                    <li><a href="#">087728353986</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer