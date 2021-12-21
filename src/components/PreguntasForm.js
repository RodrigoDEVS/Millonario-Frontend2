import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PreguntasForm = ({preg}) => {
    var correcta = (preg.verdadera)
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
                <Button variant="primary">{preg.resp1}</Button>{' '}
                <Button variant="primary">{preg.resp2}</Button>{' '}
                <Button variant="primary">{preg.resp3}</Button>{' '}
                <Button variant="success">{preg.resp4}</Button>{' '}
            </>
        </div>
    )
}
function alertClicked() {
    alert('La Respuesta es Correcta');    
}
export default PreguntasForm
