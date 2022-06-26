import './Header.css'
import Clock from './clock.js'
import { useEffect, useState } from 'react';

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

            var color1 = document.getElementById('clr1');
            var color2 = document.getElementById('clr2');
            var color3 = document.getElementById('clr3');
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

            color1.addEventListener('input', () => {
                document.body.style.setProperty('--color1', color1.value);
            });

            color2.addEventListener('input', () => {
                document.body.style.setProperty('--color2', color2.value);
            });

            color3.addEventListener('input', () => {
                document.body.style.setProperty('--color3', color3.value);
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
                <div class="cores">
                    <h3>Escolha suas cores</h3>
                    <input type="color" defaultValue="#d82b88" id="clr1" />
                    <input type="color" defaultValue="#1c8f97" id="clr2" />
                    <input type="color" defaultValue="#2a2374" id="clr3" />
                </div>
                <div class="clock">
                    <Clock />
                </div>
            </nav>
        </header>
    );
}


