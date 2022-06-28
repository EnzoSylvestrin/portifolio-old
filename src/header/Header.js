import './css/Header.css'
import Clock from './clock.js'
import MenuColor from './menuColor.js';
import Tema from './Tema.js';
import { useEffect } from 'react';

export default function Header() {

    var cont = 0;

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }
   
    useEffect(() => {
        if (cont == 0) {
            cont++;
            
            const sidebarWrapper = document.getElementById('sidebar-wrapper');
            const menuToggle = document.body.querySelector('.menu-toggle');
            menuToggle.addEventListener('click', event => {
                event.preventDefault();
                sidebarWrapper.classList.toggle('active');
                _toggleMenuIcon();
                menuToggle.classList.toggle('active');
            });
        
            var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
            scrollTriggerList.map(scrollTrigger => {
                scrollTrigger.addEventListener('click', () => {
                    sidebarWrapper.classList.remove('active');
                    menuToggle.classList.remove('active');
                    _toggleMenuIcon();
                })
                return scrollTrigger;
            }); 
        }
    }, []);

    return (
        <header id="menu">
            <a class="menu-toggle rounded" href="/"><i class="fas fa-bars"></i></a>
            <nav id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li class="sidebar-brand"><a href="/">Enzo Sylvestrin</a></li>
                    <li class="sidebar-nav-item"><a href="#page-top">Home</a></li>
                    <li class="sidebar-nav-item"><a href="#about">Sobre</a></li>
                    <li class="sidebar-nav-item"><a href="#services">Serviços</a></li>
                    <li class="sidebar-nav-item"><a href="#certificates">Certificados</a></li>
                    <li class="sidebar-nav-item"><a href="#projects">Projetos</a></li>
                </ul>
                <MenuColor /> 
                <Tema />
                <Clock />
            </nav>
        </header>
    );
}


