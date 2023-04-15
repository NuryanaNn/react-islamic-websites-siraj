import Gallery1 from '../assets/gallery1.png'
import Gallery2 from '../assets/gallery2.png'
import Gallery3 from '../assets/gallery3.png'
import Gallery4 from '../assets/gallery4.png'
import Gallery5 from '../assets/gallery5.png'
import Gallery6 from '../assets/gallery6.png'





const Gallery =()=>{
    return(
        <div className="gallerySection">
            <div className="title">
                <h3>Our Gallery</h3>
            </div>

            <div className="categoryGallery">
                <ul>
                    <li>All</li>
                    <li>Qur'an Learning</li>
                    <li>Community Service</li>
                    <li>Mosque Development</li>
                </ul>
            </div>

            <div className="galleryContent">
                <div className="card">
                    <img src={Gallery1} alt="" />
                </div>
                <div className="card">
                    <img src={Gallery2} alt="" />
                </div>
                <div className="card">
                    <img src={Gallery3} alt="" />
                </div>
                <div className="card">
                    <img src={Gallery4} alt="" />
                </div>
                <div className="card">
                    <img src={Gallery5} alt="" />
                </div>
                <div className="card">
                    <img src={Gallery6} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Gallery