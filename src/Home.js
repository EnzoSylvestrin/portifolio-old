import './Home.css';
// import Typewriter from 'react-ts-typewriter';
import {useTypewriter} from 'react-simple-typewriter'

export default function Home() {

  const {text} = useTypewriter({
    words: [" Desenvolvedor "," FullStack "," Freelancer "," Jogador"],
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
          <a href="#" class="btn btn-primary">Currículo</a>
        </div>
      </div>
    </section>
  );
}
