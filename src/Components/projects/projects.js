import './projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Projects() {
    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <section class="page-light" id="projects">
            <h3 class="title-page">Projetos</h3>
            <div class="container-projects">
                <Slider {...settings}>
                    <div class="item-projects img-1">
                        <a href="https://www.youtube.com/watch?v=FApfmscYKaY" target="_blank" rel="noopener noreferrer">
                            <h3>MoveStats</h3>
                            <p>Projeto finalista na febrace 2022 desenvolvido para facilitar na locomoção de deficientes visuais.</p>
                        </a>
                    </div>
                    <div class="item-projects img-2">
                        <a href="https://github.com/EnzoSylvestrin" target="_blank" rel="noopener noreferrer">
                            <h3>Github</h3>
                            <p>Para acessar todos meus projetos acesse meu github.</p>
                        </a>
                    </div>
                </Slider>
            </div>
        </section>
    );
}