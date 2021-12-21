import React, { useState } from 'react'
import JugadoresForm from '../components/JugadoresForm'
import { Button } from 'react-bootstrap';

const Jugadores = () => {

    const [jugadores, setJugadores] = useState([]);

    const handleJugadores = (objJugador)=>{
        //enviar el jugador a la base de datos
        fetch('https://millonario-backend.herokuapp.com/jugador',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objJugador)
        })        
        let array = [...jugadores, objJugador]
        setJugadores(array);
    }
    return (
        <div>
            <h2>Ingreso de Jugador</h2>
            <JugadoresForm handleJugadores={handleJugadores}/>
            <br/>
            <Button href='/registros' variant="primary">Ver Puntuaciones</Button>
        </div>
    )
}

export default Jugadores
