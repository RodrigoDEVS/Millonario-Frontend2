import React from 'react'
import {useEffect, useState} from 'react'
import JugadoresTabla from '../components/JugadoresTabla';

const Registros = () => {

    const[resp, setJugadores] = useState([])

const getJugadores = async()=>{
    //enviar peticion a la API
    const resp = await fetch('https://millonario-backend.herokuapp.com/jugador',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return resp;
    }
    //Función para que al recargar la página ejecute el método get
    useEffect(()=>{
        getJugadores().then(async resp=>{
            let json = await resp.json();
            setJugadores(json)
        })
    })
    
    return (
        <div>
            <h2>Tabla de Registros</h2>
            <JugadoresTabla resp={resp}/>
        </div>
    )
}

export default Registros

