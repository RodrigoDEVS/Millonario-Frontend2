import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';



const PreguntasForm = ({preg}) => {

    const [seleccion, setSeleccion] = useState('')

    let correcta = (preg.verdadera)
    
    return (
        <div>
            <Card className="text-center">
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
                <Button onClick={()=>{setSeleccion(preg.resp4)}} variant="success">{preg.resp4}</Button>{' '}
            </>
            {console.log(correcta, seleccion)}
        </div>
    )
}
function alertClicked() {
    alert('La Respuesta es Correcta');    
}
export default PreguntasForm
