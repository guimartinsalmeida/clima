import React, { Fragment, useState, useEffect } from "react";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import Clima from "./Components/Clima";
import Error from "./Components/Error";


function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: ""
})
const [consultar, guardarConsultar] = useState()
const [resultado, guardarResultado ] = useState({})
const [error, guardarError] = useState(false)

const {ciudad, pais} = busqueda


  useEffect(()=>{
    const consultarAPI = async () =>{
      if (consultar){
        const API_id = "9f2ef4c5a7330b8825d3cc586bef0e8b"
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_id}`
  
        const respuesta = await fetch(URL)
        const resultado = await respuesta.json()
  
        guardarResultado(resultado)
        guardarConsultar(false)

        if(resultado.cod === "404"){
          guardarError(true)
      }else{
      guardarError(false)
      }
      }
      
    }
    consultarAPI()
  }, [consultar]);

  
  let componente
    if(error){
      componente = <Error mensaje="No hay resultados"></Error>

    }else{
     componente = <Clima resultado={resultado}></Clima>
    }
  

  return (
    <Fragment>
      <Header titulo="Clima React App"/>
        <div className="contenedor-form ">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                consultar= {consultar}
                guardarConsultar={guardarConsultar}
                />
                </div>
              <div className="col m6 s12">
                {componente}
                </div>
            </div>
          </div>
        </div>
      
    </Fragment>
  );
}

export default App;
