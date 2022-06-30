import { useEffect, useState } from 'react';

export default function Clock() {
    const [segundo, setSegundo] = useState(0);
    const [minuto, setMinuto] = useState(0);
    const [hora, setHora] = useState(0);
    
    useEffect(() => {

        const interval = setInterval(() =>{
            setSegundo(segundo + 1);
            if (segundo === 59) {
                setSegundo(0);
                setMinuto(minuto + 1);
                if (minuto === 59) {
                    setMinuto(0);
                    setHora(hora + 1);
                }
            }
        }, 1000)

        return () => clearInterval(interval);  

    });
    
    return (
        <div class="clock">
            <p><span>{hora.toString().padStart(2, "0")}:{minuto.toString().padStart(2, "0")}:{segundo.toString().padStart(2, "0")}</span></p>
        </div>
    );
}