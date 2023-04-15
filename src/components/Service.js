import Service1 from '../assets/service1.png'
import Service2 from '../assets/service2.png'
import Service3 from '../assets/service3.png'
import Service4 from '../assets/service4.png'
import Service5 from '../assets/service5.png'
import Service6 from '../assets/service6.png'



const Service =()=>{
    return(
        <div className="serviceSection">
            <div className="title">
                <h3>Our Service</h3>
            </div>

            <div className="serviceContent">
                <div className="card">
                    <div className="images">
                        <img src={Service1} alt="" />
                    </div>
                    <div className="teks">
                        <h3>Learning Qur'an</h3>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit</p>
                    </div>
                </div>
                <div className="card">
                    <div className="images">
                        <img src={Service2} alt="" />
                    </div>
                    <div className="teks">
                        <h3>Marriage Sevice</h3>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit</p>
                    </div>
                </div>
                <div className="card">
                    <div className="images">
                        <img src={Service3} alt="" />
                    </div>
                    <div className="teks">
                        <h3>Counseling</h3>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit</p>
                    </div>
                </div>
                <div className="card">
                    <div className="images">
                        <img src={Service4} alt="" />
                    </div>
                    <div className="teks">
                        <h3>Community Service</h3>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit</p>
                    </div>
                </div>
                <div className="card">
                    <div className="images">
                        <img src={Service5} alt="" />
                    </div>
                    <div className="teks">
                        <h3>Mosque Development</h3>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit</p>
                    </div>
                </div>
                <div className="card">
                    <div className="images">
                        <img src={Service6} alt="" />
                    </div>
                    <div className="teks">
                        <h3>Funeral Service</h3>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service