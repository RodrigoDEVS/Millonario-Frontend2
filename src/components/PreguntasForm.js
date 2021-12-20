import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PreguntasForm = ({preg}) => {
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
                <Button onClick={alertClicked} variant="primary">{preg.resp1}</Button>{' '}
                <Button onClick={alertClicked} variant="primary">{preg.resp2}</Button>{' '}
                <Button onClick={alertClicked} variant="primary">{preg.resp3}</Button>{' '}
                <Button onClick={alertClicked} variant="success">{preg.resp4}</Button>{''}
                
            </>
        </div>
    )
}
function alertClicked() {
    alert('La Respuesta es Correcta');    
}
export default PreguntasForm
