import React from 'react'
import { Table } from 'react-bootstrap';

const JugadoresTabla = ({ resp }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Puntaje</th>
                    </tr>
                </thead>
                <tbody>
                    {resp.map((element,i) => {
                        return (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{element.name}</td>
                                <td>{element.score}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>
    )
}

export default JugadoresTabla
