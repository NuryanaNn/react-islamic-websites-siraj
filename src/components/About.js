import About1 from '../assets/about1.png'
import About2 from '../assets/about2.png'
import About3 from '../assets/about3.png'



const About =()=>{
    return(
        <div className="aboutUs">
            <div className="title">
                <h3>About Us</h3>
            </div>

            <div className="aboutContent">
                <div className="card1">
                    <div className="imgContainer">
                        <div className="firstImg">
                            <img src={About1} alt="" />
                        </div>

                        <div className="secondImg">
                            <img src={About2} alt="" />
                            <img src={About3} alt="" />
                        </div>
                    </div>
                </div>

                <div className="card2">
                   <div className="teks">
                        <h1>The Most Complete Gift Of God Is A Life Based On Knowledge</h1>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Illum Iusto Minima Quo, Recusandae Perspiciatis Aspernatur, Rerum Tempora Vitae Aperiam Enim, Dicta Maxime? Eum Repellat Velit Perspiciatis Eligendi Rerum Voluptate Repellendus.
                            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Illum Iusto Minima Quo, Recusandae Perspiciatis Aspernatur, Rerum Tempora Vitae Aperiam Enim.</p>
                        <button>Contact Us</button>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default About