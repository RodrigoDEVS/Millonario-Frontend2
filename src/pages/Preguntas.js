import React from 'react'
import { useEffect, useState } from 'react'
import PreguntasForm from '../components/PreguntasForm'

const Preguntas = () => {
    let exitoso = [];
    let listaPreguntas = [];

    //Como debo hacer cuatro grupos de seleccion 1-5,6-10,11-15 y 16-20 debo hacer el procedimiento 
    //cuatro veces es decir un for de 0 a 3
    for (let index1 = 0; index1 <= 4; index1++) {
        let min = 1 + (index1 * 5);         //Paramterizo el inicio y fin de acuerdo a grupo en el que este
        let max = 5 + (index1 * 5) + 1;
        while (exitoso.length < 5) {        //Me mantengo buscando numeros hata que llene los 5 espacios de cada grupo
            let indicePregunta = Math.floor(Math.random() * (max - min) + min);  //este es cada intento
            //console.log('indice :', indicePregunta);
            //console.log(exitoso.indexOf(indicePregunta));
            if (exitoso.indexOf(indicePregunta) < 0) {      // si no esta el intento en el vector, la respuesta es -1
                exitoso.push(indicePregunta);               // lo incluye cuando no lo encuentre
                listaPreguntas.push(indicePregunta)
                //console.log('vector', exitoso);
            }
        }
        exitoso = [];    
                                           // para ir al siguiente grupo debe borrar el vector
        //console.log('Index1 = ', index1);
    }
    console.log("listaPreguntas", listaPreguntas)
    const [preg, setPreg] = useState({})

    const [seq] = useState(listaPreguntas)

    const [preguntaActual, setPreguntaActual] = useState(0)

    const getPregunta = async () => {
        //enviar peticion a la API
        //Creo un vector de verificacion
        
        let index = seq[preguntaActual];
        const preg = await fetch(`https://millonario-backend.herokuapp.com/preguntas/indice/${index}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return preg;

    }
    //Función para que al recargar la página ejecute el método get
    useEffect(() => {
        getPregunta().then(async preg => {
            let json = await preg.json();
            setPreg(json)
        })
        return()=>{
            let json = preg.json();
            setPreg(json)
        }
    },[preguntaActual])

    return (
        <div>
            <h2>Preguntas</h2>
            <PreguntasForm preg={preg} />
        </div>
    )

}

export default Preguntas

