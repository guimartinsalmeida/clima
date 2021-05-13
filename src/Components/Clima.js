import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado, guardarError}) => {

    // extraer valores
    const {main, name} = resultado

    if(!name) return null

    //Grados Kelvin
    const Kelvin = 273.15 


    return ( 
        <div className="card-panel white col s12">
            {guardarError? <p>insira una ciudad valida</p>:
             <div className="black-text">
             <h2>El clima de {name} es:</h2>
                     <p className="temperatura">
                         {parseFloat(main.temp - Kelvin, 10).toFixed(1)} <span>&#x2103;</span>
                     </p>
                     <p>
                         Temperatura Máxima: {parseFloat(main.temp_max - Kelvin, 10).toFixed(1)} <span>&#x2103;</span>
                     </p>
                     <p>
                         Temperatura Minima: {parseFloat(main.temp_min - Kelvin, 10).toFixed(1)} <span>&#x2103;</span>
                     </p>
                     </div>
            }
           
        </div>
        
     );
}


Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;