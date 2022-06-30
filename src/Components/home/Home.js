import './Home.css';
// import Typewriter from 'react-ts-typewriter';
import {useTypewriter} from 'react-simple-typewriter'
import Curriculo from './assets/Enzo.pdf';
import img from './assets/programador.webp';

export default function Home() {

  const {text} = useTypewriter({
    words: [" Desenvolvedor "," Fullstack "," Freelancer "," Jogador "],
    loop: 0, 
    typeSpeed: 150,
    deleteSpeed: 50,
    delaySpeed: 1000
  });

  return (
    <section id="home" class="page-section">
      <div class="home">
        <div class="max-width">
          <div class="texto1">Bem vindo, meu nome é:</div>
          <div class="texto2">Enzo</div>
          <div class="texto3">
          &nbsp;{text}
          </div>
          <a href={Curriculo} target="_blank" class="btn btn-primary">Currículo</a>
        </div>
        <div class="right-img">
          <img src={img} class="img-home"></img>
        </div>
      </div>
    </section>
  );
}
