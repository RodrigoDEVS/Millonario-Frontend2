import React from 'react'
import {useEffect, useState} from 'react'
import PreguntasForm from '../components/PreguntasForm'

const Preguntas = () => {

    const[preg, setPreguntas] = useState([])

const getPregunta = async()=>{
    //enviar peticion a la API
    let index = 2;
    const preg = await fetch(`https://millonario-backend.herokuapp.com/preguntas/indice/${index}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return preg;
        
    }
    //Función para que al recargar la página ejecute el método get
    useEffect(()=>{
        getPregunta().then(async preg=>{
            let json = await preg.json();
            setPreguntas(json)
        })
    })
    
    return (
        <div>
            <h2>Preguntas</h2>
            <PreguntasForm preg={preg}/>
        </div>
    )
    
}

export default Preguntas

