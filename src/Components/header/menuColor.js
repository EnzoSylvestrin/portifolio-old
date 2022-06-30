import {useEffect} from 'react';

export default function MenuColor() {

    useEffect(() => {
        var color1 = document.getElementById('clr1');
        var color2 = document.getElementById('clr2');
        var color3 = document.getElementById('clr3');

        color1.addEventListener('input', () => {
            document.body.style.setProperty('--color1', color1.value);
        });

        color2.addEventListener('input', () => {
            document.body.style.setProperty('--color2', color2.value);
        });

        color3.addEventListener('input', () => {
            document.body.style.setProperty('--color3', color3.value);
        });
    }, []);

    return(
        <div class="cores">
            <h3><span>Escolha suas cores</span></h3>
            <input type="color" defaultValue="#ff008c" id="clr1" />
            <input type="color" defaultValue="#03f0fc" id="clr2" />
            <input type="color" defaultValue="#1804fb" id="clr3" />
        </div>
    );
}