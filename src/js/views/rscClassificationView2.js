import React from "react";
import { Link } from "react-router-dom";
import { SeparationLines } from "../components/SeparationLines";
import { SlideView } from "./slideView";

export const rscClassificationViewII = () => {

    return <div>
        <SeparationLines />
        <div className="container mx-auto p-sm-0 p-md-0">
            <div className="row">

                <div className="col-10 mx-auto text-center">
                    <h2 className="text-blue-color font-face-cocogoose">¿QUIERES CLASIFICAR AL</h2>
                    <h2 className="text-blue-color font-face-cocogoose">II TORNEO INTERCOLEGIAL DE ROBÓTICA</h2>
                    <h2 className="text-blue-color font-face-cocogoose">DE VENEZUELA?</h2>
                </div>
            </div>
            <div className="row mx-auto mt-lg-4">
                <iframe
                    className="col-12 col-md-12 col-lg-12 mb-3 mb-md-0"
                    style={{ height: "600px" }}
                    src="https://www.youtube-nocookie.com/embed/-83mYxO5Ow4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

                </iframe>
            </div>
            <div className="col-12 col-md-12 col-lg-12 mt-md-3">

                <p className="text-center">¡PARTICIPA Y FORMA PARTE DE ESTA <b>GRAN EXPERIENCIA!</b></p>
            </div>
            <hr style={{ border: "none", height: "1px", background: "#002C56" }} />

            <div className="row mx-auto pl-2 ml-lg-1 mt-lg-5">
                <h2 className="text-center text-uppercase mt-3 text-blue-color font-face-cocogoose">¿Cómo participan los estudiantes de los colegios aliados?</h2>

                <p>El proceso estará conformado por tres fases que se describen a continuación:

                    <br /><br />
                    <b className="text-blue-color">Fase 1:</b> <span className="text-blue-color">Clasificatoria.</span>
                    <br /><br />
                    <p>Del 6 al 24 de febrero. En esta etapa, competirás con tus compañeros de colegio, donde presentarás de manera individual un proyecto elaborado con los programas vistos en clases.
                        <br /><br />
                        En el formulario de tu etapa correspondiente, podrás ver las instrucciones para participar. Recuerda que debes llenar el formulario únicamente cuando tengas listo tu proyecto.</p>
                    <br />
                    <b className="text-blue-color">Fase 2:</b> <span className="text-blue-color">Selección de estudiantes clasificados por colegios.</span>
                    <br /><br />
                    <p>En esta fase se escogerán los tres proyectos más destacados por etapa y colegio, para asistir al torneo Robotics Science Competition (RSC) y representar a tu institución educativa. Los resultados de los seleccionados serán publicados el 13 de marzo en nuestro sitio web.</p>
                    <br />
                    <b className="text-blue-color">Fase 3:</b> <span className="text-blue-color">Preparación previa al RSC (Robotics Science Competition)</span>
                    <br /><br />
                    Inicia el 13 de marzo con el anuncio de los resultados, hasta el 21 de abril.  Los clasificados se prepararán para el torneo con el apoyo de sus mentores, quienes los ayudarán a reforzar los conocimientos de robótica, mediante clases curriculares y/o sesiones adicionales.</p>
            </div>
            <div className="row mx-auto ml-lg-1">
                <h2 className="text-center text-uppercase mt-5 mb-5 text-blue-color font-face-cocogoose">¿Cómo participar en la fase clasificatoria del torneo por niveles educativos?</h2>
                <br /><br />
                <div className="row mx-auto justify-content-center">
                    <div className="col-12 text-center"><p>Verificar por el siguiente link la categoría en la que participarás:</p>
                        <br /><br />
                        <a href="https://docs.google.com/spreadsheets/d/12NJojl1A_hM2HQHr41wr_R1a-HN2HfDfO7X8X3ADl64/edit?usp=sharing" target="_blank"><span className="badge rounded-pill pl-4 pr-4 text-white bg-blue-badge"><h5 className="pt-2">QUIERO VER MI CATEGORIA</h5></span></a>
                        
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="row mx-auto">
                <div className="col-12 text-center">
                    <p>Selecciona tu categoría</p>
                </div>
            </div>
            <br />
            <div className="text-center mb-5">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-4">
                       
                            <img src="https://i.ibb.co/wg91zg2/MOCKUP-PAGINA-Torneo-14.png" className="card-img-top w-75" alt="Primaria Menor" />
                       
                    </div>
                    <div className="col-sm-10 col-md-4">
                        
                            <img src="https://i.ibb.co/Hz1qKQL/MOCKUP-PAGINA-Torneo-15.png" className="card-img-top w-75" alt="Primaria Mayor" />
                        
                    </div>
                    <div className="col-sm-10 col-md-4">
                            <img src="https://i.ibb.co/KL7mDBL/MOCKUP-PAGINA-Torneo-16.png" className="card-img-top w-75" alt="Primaria Mayor" />
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-sm-10 col-md-4">
                            <img src="https://i.ibb.co/bz024vY/MOCKUP-PAGINA-Torneo-17.png" className="card-img-top w-75" alt="Primaria Menor" />
                    </div>
                    <div className="col-sm-10 col-md-4">
                            <img src="https://i.ibb.co/wMbYGkk/MOCKUP-PAGINA-Torneo-18.png" className="card-img-top w-75" alt="Primaria Mayor" />
                    </div>
                    <div className="col-sm-10 col-md-4">
                            <img src="https://i.ibb.co/NZy3w1k/MOCKUP-PAGINA-Torneo-19.png" className="card-img-top w-75" alt="Primaria Mayor" />
                    </div>
                </div>
            </div>
            <hr style={{ border: "none", height: "1px", background: "#002C56" }} />

            <div className="row text-center text-sm-center text-md-center justify-content-lg-center">
                <h2 className="text-blue-color font-face-cocogoose">INSTITUCIONES PARTICIPANTES</h2>
            </div>
            <div>
                <div className="row mb-3">
                   <div className="col-12">
                   <img src="https://i.ibb.co/K7fHpvD/MOCKUP-PAGINA-Torneo.png" className="card-img-top" alt="Primaria Mayor" />
                   </div>


                </div>
            </div>
            <div className="row mb-3">
                    <div className="col">
                    <h2 className="text-center text-blue-color font-face-cocogoose">¡Conoce más de nuestra experiencia en el Primer Torneo Intercolegial de Robótica en 2022!</h2>
                    </div>
                </div>
            <div className="row mx-auto justify-content-center">
                <div className="col-12">

                    <SlideView/>
                </div>
            </div>


            <div className="row justify-content-center align-items-md-center">
                <div className="col-7 col-md-4">
                    <img src="https://i.ibb.co/7J7Qdqr/Association-Logo-01-1.png" className="card-img-top" alt="American Robotics" />
                </div>
                <div className="col-7 col-md-4">
                    <img src="https://i.ibb.co/vX0Mz9V/LOGO-TK-PNG-30.png" className="card-img-top" alt="TecniKids" />
                </div>
                <div className="col-7 col-md-4">
                    <img src="https://i.ibb.co/g46JB6Y/logo-egb4.jpg" className="card-img-top" alt="EGB4 Technologies" />
                </div>
            </div>
            <div className="row mx-auto justify-content-center">
           
           <p className="text-center mt-5">
               <b>Para más información puedes contactarnos:</b>
               <br />
               <a href="tel:+58-412-207-0246">+58 412 207 0246</a>
               <br />
               <a href="mailto:torneo.tecnikidsve@gmail.com">torneo.tecnikidsve@gmail.com</a>
           </p>
       </div>
        </div>
        <SeparationLines />
    </div>
};