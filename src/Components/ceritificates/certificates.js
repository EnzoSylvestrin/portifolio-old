import './certificates.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import febrace from "./assets/febrace.png";
import node from "./assets/node.png";

export default function Certificates() {
    var settings = {
        speed: 500,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2200,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
    };

    return (
        <section class="page-section" id="certificates">
            <h3 class="title-page">Certificados</h3>
            <div class="container-owl-certificates">
            <Slider {...settings}>
                <div class="item">
                    <div class="img-item">
                        <img src={node} alt="Certificado Node.js"></img>
                    </div>
                    <h3><span>Certificado Node.js</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={febrace} alt="Certificado Febrace 2022"></img>
                    </div>
                    <h3><span>Certificado Febrace 2022</span></h3>
                </div>
            </Slider>
            </div>
        </section>
    );
}