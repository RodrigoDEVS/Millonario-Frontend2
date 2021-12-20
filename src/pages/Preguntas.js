import React from 'react'
import {useEffect, useState} from 'react'
import PreguntasForm from '../components/PreguntasForm'

const Preguntas = () => {
    const[resp, setJugadores] = useState([])

const getJugadores = async()=>{
    //enviar peticion a la API
    const resp = await fetch('https://millonario-backend.herokuapp.com/preguntas',{
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
            <h2>Preguntas</h2>
            <PreguntasForm/>
        </div>
    )
    
}

export default Preguntas
