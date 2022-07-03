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
                <form class="form-contact">
                    <label>Nome:</label>
                    <input type="text" name="name" class="form-control" placeholder="Nome"/>
                    <label>Email:</label>
                    <input type="text" name="email" class="form-control" placeholder="Email"/>
                    <label>Mensagem:</label>
                    <textarea class="form-control" placeholder="Escreva a mensagem"></textarea>
                    <div class="btn-form">
                        <a href="#" class="btn btn-primary">Enviar</a>
                    </div>
                </form>
            </div>
        </section>
    );
}