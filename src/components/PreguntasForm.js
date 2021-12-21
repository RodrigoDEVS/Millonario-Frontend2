import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';




const PreguntasForm = ({preg}) => {

    const [seleccion, setSeleccion] = useState('')

    let correcta = (preg.verdadera)
    
    let resultado = (correcta==seleccion)
    
    
    return (
        <div>
            <div>
            <Card className="text-center">
            <Card.Header>Por un valor de: <b>{preg.premio}</b> Puntos <br/> Diga:</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {preg.pregunta}
                    </Card.Text>
                </Card.Body>
            </Card>
            <>
                <Button onClick={()=>{setSeleccion(preg.resp1)}} variant="primary">{preg.resp1}</Button>{' '}
                <Button onClick={()=>{setSeleccion(preg.resp2)}} variant="primary">{preg.resp2}</Button>{' '}
                <Button onClick={()=>{setSeleccion(preg.resp3)}} variant="primary">{preg.resp3}</Button>{' '}
                <Button onClick={()=>{setSeleccion(preg.resp4)}} variant="primary">{preg.resp4}</Button>{' '}
            </>
            </div>
            <br/>
            <div>
            <Card className="text-center">
                <Card.Body>
                    <Card.Text>
                        Su Selección es: 
                        <br/><br/>
                        <b>{seleccion}</b>
                    </Card.Text>
                </Card.Body>
            </Card>
            <>
                <Button onClick={()=>{resultado?alert('Respuesta Correcta'):alert('Respuesta Incorrecta')}} variant="success">Verificar Respuesta</Button>
            </>
            </div>
        </div>
        
    )
}
function alertClicked() {
    alert('La Respuesta es Correcta');    
}

export default PreguntasForm
