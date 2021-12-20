import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PreguntasForm = () => {
    return (
        <div>
            <Card className="text-center">
                <Card.Body>
                    <Card.Text>
                        Contexto de las preguntas
                    </Card.Text>
                </Card.Body>
            </Card>
            <>
                <Button variant="primary">Opcion 1</Button>{' '}
                <Button variant="primary">Opcion 2</Button>{' '}
                <Button variant="primary">Opcion 3</Button>{' '}
                <Button onClick={alertClicked} variant="primary">Opcion 4</Button>{' '}
            </>
        </div>
    )
}
function alertClicked() {
    alert('La Respuesta es Correcta');
}


export default PreguntasForm
