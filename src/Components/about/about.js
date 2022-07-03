import icon from '../header/assets/img-icon.png';
import Curriculo from './assets/Enzo.pdf'
import './about.css';

export default function About() {
    return (
        <section class="page-light" id="about">
            <h2 class="title-page">Sobre mim</h2>
            <div class="about-section">
                <div class="left-img">
                    <img src={icon} class="img-about" alt="icon"></img>
                </div>
                <div class="right-text">
                    <div class="texto-about">
                        <h3>Quem sou eu?</h3>
                        <p>
                        Eu sou de Jundiaí SP. estou atualmente estudando infomática na escola Prof. Luiz Rosa, e começei minha carreira em TI na Bitbyte infomática, empresa com a qual aindo trabalho, sou apaixonado por automação de sistemas e atuo também como freelancer. Para saber mais sobre minhas habilidades e sobre minha carreira clique e faça o download do meu curriculo.
                        </p>
                        <a href={Curriculo} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Currículo</a>
                    </div>
                </div>
            </div>
        </section>
    );
}