import './Home.css';
import {useTypewriter} from 'react-simple-typewriter'
import Blob from './blob.js'


export default function Home() {

  const {text} = useTypewriter({
    words: [" Desenvolvedor "," Fullstack "," Freelancer "," Jogador "],
    loop: 0, 
    typeSpeed: 150,
    deleteSpeed: 50,
    delaySpeed: 1000
  });

  return (
    <section id="home">
      <div class="home">
        <div class="blob">
          <Blob />
        </div>
        <div class="max-width">
          <div class="texto1">Bem vindo, meu nome é:</div>
          <div class="texto2"><span>Enzo</span></div>
          <div class="texto3">
            &nbsp;{text}
          </div>
          <a href="https://www.linkedin.com/in/enzo-sylvestrin-336b71221" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Encontre-me</a>
        </div>
        <div class="right-img">
          <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_iv4dsx3q.json"  background="transparent" class="lottie" speed="1" loop  autoplay></lottie-player>
        </div>
      </div>
    </section>
  );
}
