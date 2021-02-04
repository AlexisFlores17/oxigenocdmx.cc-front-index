import React from 'react';

export const MainContent = () =>{

    return(
        <div className="main-container col-12">
            <div className="tituloMainContent col-9">
                <h1>¿En qué ciudad te encuentras?</h1>
                <p className="textoContent">
                    Este es un listado de ciudades en donde está disponible 
                    el servicio de Oxígeno México CC. Cada sitio esta administrado 
                    por un equipo local , si te interesa implementarlo en tu ciudad 
                    puedes contactarnos al correo <a className="hoverMain" href="mailto:oxigeno.cc.mx@gmail.com">oxigeno.cc.mx@gmail.com</a>
                </p>
            </div>
            <div className="listadoMainContent" >
                
            </div>
        </div>
    );
}