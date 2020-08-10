import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { SeparationLines } from '../../components/SeparationLines';
import { MyFooter } from '../../components/MyFooter';
import arduino from '../../../img/logo-arduino.png';
import button from '../../../img/button.png';

export const ArduinoView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row mx-2 mt-2 mt-md-4">
                    <p className="col-11 col-md-6 justify-text">
                        Los programas de clase <span className="f-weigth-600">Arduino </span> 
                        Education progresan a los estudiantes a través de STEAM desde la 
                        escuela intermedia hasta la universidad, aumentando su complejidad 
                        para desafiarlos a medida que desarrollan sus habilidades.
                        <br />
                        <br />
                        Todos los programas incluyen una gama de productos electrónicos como 
                        tableros programables, sensores, piezas mecánicas, software simple de 
                        código abierto, contenido en línea para estudiantes y capacitación guiada 
                        y apoyo para educadores.
                    </p>
                    <div className="col-12 col-md-6 my-3 center-text">
                        <img className="col-10 col-md-7 mb-4 mb-md-5" src={arduino} alt="Arduino"/>
                        <a className="col-12 my-5" href="https://www.arduino.cc/education">
                            <img src={button} className="col-9 col-md-7" alt="Button" />
                        </a>
                    </div>
                    <p className="col-11 col-md-12 justify-text">
                        Los productos con los que aprenden los estudiantes son los mismos que los 
                        utilizados profesionalmente en empresas de todo el mundo, en aplicaciones 
                        como creación rápida de prototipos, IA, tecnología de drones y aprendizaje 
                        automático.
                    </p>
                </div>
            </div>
            <SeparationLines />
            <MyFooter />
        </div>
    )
}