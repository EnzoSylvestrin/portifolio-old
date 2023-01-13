import './projects.css';
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
                        <div class="img-overlay"></div>
                        <a href="https://movestats.vercel.app" target="_blank" rel="noopener noreferrer">
                            <h3>MoveStats</h3>
                            <p>Projeto finalista na febrace 2022 desenvolvido para facilitar na locomoção de deficientes visuais.</p>
                        </a>
                    </div>
                    <div class="item-projects img-2">
                        <a href="https://enzosylvestrin.github.io/Akame-Wiki/" target="_blank" rel="noopener noreferrer">
                            <h3>Akame Wiki</h3>
                            <p>Site feito para testar e aprimorar meus conhecimentos com react e APIs.</p>
                        </a>
                    </div>
                    <div class="item-projects img-3">
                        <a href="https://sorteio-plum.vercel.app" target="_blank" rel="noopener noreferrer">
                            <h3>Sorteio next</h3>
                            <p>Site simples de sorteio de números feito para testar e aprimorar meus conhecimentos com Next.js</p>
                        </a>
                    </div>
                    <div class="item-projects img-4">
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