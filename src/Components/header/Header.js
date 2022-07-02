import './header.css'
import Clock from './clock.js'
import MenuColor from './menuColor.js';
import Tema from './Tema.js';
import { useEffect } from 'react';
import Icon from './assets/img-icon.png';

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
        if (cont === 0) {
            cont++;

            var navbarShrink = function () {
                const navbarCollapsible = document.body.querySelector('#main-bar');
                if (!navbarCollapsible) {
                    return;
                }
                if (window.scrollY === 0) {
                    navbarCollapsible.classList.remove('shrink')
                } else {
                    navbarCollapsible.classList.add('shrink')
                }
        
            };
        
            // Shrink the navbar 
            navbarShrink();

            document.addEventListener('scroll', navbarShrink);
            
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
            <div class="main-bar" id="main-bar">
                <a href="#menu"><img src={Icon} class="bar-icon"></img></a>
            </div>
            <a class="menu-toggle rounded" href="/"><i class="fas fa-bars"></i></a>
            <nav id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li class="sidebar-brand"><a href="/"><span>Enzo Sylvestrin</span></a></li>
                    <li class="sidebar-nav-item"><a href="#page-top"><span>Home</span></a></li>
                    <li class="sidebar-nav-item"><a href="#about"><span>Sobre</span></a></li>
                    <li class="sidebar-nav-item"><a href="#services"><span>Serviços</span></a></li>
                    <li class="sidebar-nav-item"><a href="#certificates"><span>Certificados</span></a></li>
                    <li class="sidebar-nav-item"><a href="#projects"><span>Projetos</span></a></li>
                </ul>
                <MenuColor /> 
                <Tema />
                <Clock />
            </nav>
        </header>
    );
}


