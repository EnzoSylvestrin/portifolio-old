import './services.css';

export default function Servicer() {
    return (
        <section class="page-light" id="services">
            <h3 class="title-page">Serviços</h3>
            <div class="container-services">
                <div class="item-services">
                    <i class="fa fa-gear" id="icon-services"></i>
                    <h3>Automação</h3>
                    <p>Criação de bots e automação de tarefas repetitivas</p>
                </div>
                <div class="item-services">
                    <i class="fa fa-code" id="icon-services"></i>
                    <h3>Criação de sites</h3>
                    <p>Construção do design e funcionamento de sites</p>
                </div>
                <div class="item-services c-1">
                    <i class="fa-brands fa-android" id="icon-services"></i>
                    <h3>Criação de aplicativos</h3>
                    <p>Desenvolvimento de aplicativos Android</p>
                </div>
            </div>
        </section>
    );
}