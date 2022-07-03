import './contact.css';

export default function Contact() {
    return (
        <section class="page-section" id="contact">
            <h3 class="title-page">Contato</h3>
            <div class="container-contact">
                <div class="ways-contact">
                    <h3><span>Entre em contato comigo!</span></h3>
                    <p>Caso queira entrar em contato comigo me mande uma mensagem, eu vou adorar.</p>
                    <ul class="list-icons">
                        <li>
                            <i class="fa fa-envelope" id="icon-contact"></i> 
                            <a href="mailto:enzospavani@gmail.com"><p>enzospavani@gmail.com</p></a>
                        </li>
                        <li>
                            <i class="fa fa-location-dot" id="icon-contact"></i>
                            <p class="mg-icon-2">Jundiaí, São Paulo - Brasil</p>
                        </li>
                    </ul>
                </div>
                <form action="https://formsubmit.co/fecfce57d3e403900dad1688f2d9c317" method="POST" class="form-contact">
                    <input type="hidden" name="_next" value="https://enzosylvestrin.github.io/portifolio/" />
                    <input type="hidden" name="_template" value="box" />
                    <input type="hidden" name="_autoresponse" value="Recebi sua mensagem, muito obrigado por entrar em contato! Responderei o mais rápido possível..." />            
                    <label>Nome:</label>
                    <input type="text" name="name" class="form-control" placeholder="Nome"/>
                    <label>Email:</label>
                    <input type="email" name="email" class="form-control" placeholder="Email"/>
                    <label>Mensagem:</label>
                    <textarea name="message" class="form-control" placeholder="Escreva a mensagem" ></textarea>
                    <div class="btn-form">
                        <input type="submit" class="btn btn-primary" value="Enviar" />
                    </div>
                </form>
            </div>
        </section>
    );
}