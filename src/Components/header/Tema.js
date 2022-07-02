import { useEffect } from "react";

export default function Tema() {

    var cont = 0;

    useEffect(() => {
        if (cont === 0) {
            cont++;

            const menuToggle = document.body.querySelector('.menu-toggle');

            var darkMode = document.getElementById('darkMode');
            darkMode.addEventListener('click', event => {
                event.preventDefault();
                var darkTheme = document.getElementById('dark-theme');
                if (darkTheme.classList.contains('fa-sun')) {
                    document.body.style.setProperty('--bgColor', "#fff");
                    document.body.style.setProperty('--textColor', "#000");
                    document.body.style.setProperty('--bgColor-light', "#ebedf3");
                    document.body.style.setProperty('--hoverBackground', "rgba(10, 10, 10, 0.1)");
                    menuToggle.classList.add('light');
                    darkTheme.classList.remove('fa-sun');
                    darkTheme.classList.add('fa-moon');
                }
                else {
                    document.body.style.setProperty('--bgColor', "#000");
                    document.body.style.setProperty('--textColor', "#fff");
                    document.body.style.setProperty('--bgColor-light', "#131111");
                    document.body.style.setProperty('--hoverBackground', "rgba(255, 255, 255, 0.1)");
                    menuToggle.classList.remove('light');
                    darkTheme.classList.remove('fa-moon');
                    darkTheme.classList.add('fa-sun');
                }
            });
        }

    }, []);

    return (
        <div class="tema">
            <a href="#" id="darkMode"><i class="fa fa-sun" id="dark-theme"></i></a>
        </div>
    );
}