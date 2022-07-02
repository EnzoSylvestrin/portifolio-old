import icon from '../header/assets/img-icon.png';
import './about.css';

export default function About() {
    return (
        <section class="page-section page-light" id="about">
            <h2 class="title-page">Sobre mim</h2>
            <div class="about-section">
                <div class="left-img">
                    <img src={icon} class="img-about"></img>
                </div>
                <div class="right-text">
                    <div class="texto-about">
                        <h3>Quem sou eu?</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet laoreet vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur id dui malesuada, mollis velit vel, vehicula odio. Vivamus a lacus iaculis, feugiat arcu quis, varius augue. Sed tristique tempor ante, at elementum nisl vulputate at. Donec enim dolor, volutpat nec pellentesque nec, gravida eu leo. Quisque at orci id risus volutpat laoreet id a massa.
                        </p>
                        <a href="/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Currículo</a>
                    </div>
                </div>
            </div>
        </section>
    );
}