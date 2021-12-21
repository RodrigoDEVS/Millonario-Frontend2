import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Jugadores from './Jugadores';
import Landing from './Landing';
import Preguntas from './Preguntas';
import Registros from './Registros';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/jugadores" element={<Jugadores/>}/>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/preguntas" element={<Preguntas/>}/>
                    <Route path="/registros" element={<Registros/>}/> 
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter;