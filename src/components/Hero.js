import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";




const Hero =()=>{
    return(
        <div className="heroBanner">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="card1">
                        <div className="overlay"></div>
                        <div className="teks">
                            <h3>And [He revealed] that the masjids are for <br /> Allah, so do not invoke with Allah anyone</h3>
                            <h4>(SURAH AL-JINN VERSE 18)</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card2">
                        <div className="overlay"></div>
                        <div className="teks">
                            <h3>And seek help through patience and prayer. <br /> Indeed, it is a burden except for the humble</h3>
                            <h4>(SURAH AL-BAQARAH VERSE 45)</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="card3">
                        <div className="overlay"></div>
                        <div className="teks">
                            <h3>Read, ˹O Prophet,˺ in the Name of your Lord Who created</h3>
                            <h4>(SURAH AL-ALAQ VERSE 1)</h4>
                            <button>Contact Us</button>
                        </div>
                    </div></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Hero