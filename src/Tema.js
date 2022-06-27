import { useEffect } from "react";

export default function Tema() {

    var cont = 0;

    useEffect(() => {
        if (cont == 0) {
            cont++;
            var darkMode = document.getElementById('darkMode');
            darkMode.addEventListener('click', event => {
                event.preventDefault();
                var darkTheme = document.getElementById('dark-theme');
                if (darkTheme.classList.contains('fa-moon')) {
                    document.body.style.setProperty('--bgColor', "#fff");
                    darkTheme.classList.remove('fa-moon');
                    darkTheme.classList.add('fa-sun');
                }
                else {
                    document.body.style.setProperty('--bgColor', "#000");
                    darkTheme.classList.remove('fa-sun');
                    darkTheme.classList.add('fa-moon');
                }
            });
        }

    }, []);

    return (
        <div class="tema">
            <a href="#" id="darkMode"><i class="fa fa-moon" id="dark-theme"></i></a>
        </div>
    );
}