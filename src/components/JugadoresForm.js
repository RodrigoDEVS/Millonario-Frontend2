import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const JugadoresForm = ({ handleJugadores }) => {
    const navigate = useNavigate()
    const objForm = {
        name: ''
    }

    const [form, setForm] = useState(objForm);

    const handleForm = (e) => {
        let obj = { ...form, [e.target.name]: e.target.value };
        setForm(obj)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleJugadores(form)
        setForm(objForm)
        navigate('/preguntas')
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="TextInput">Para Iniciar Digite Su Nombre</Form.Label>
                    <Form.Control required value={form.name} onChange={handleForm} name="name" id="name" type="TextInput" placeholder="Nombre" />
                </Form.Group>
                <Button variant="primary" type="submit">Guardar</Button>

            </Form>
        </div>
    )
}

export default JugadoresForm
