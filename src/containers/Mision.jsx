import React from 'react';
import '../styles/components/mision.css'
import mision from '../img/mision.jpg'
const Mision = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
            <img  className="img-component mt-3" src={mision} alt={mision}/>
        </div>
        <div className="col-7">
            <div className="title mt-3">
              <h1>Misión</h1>
            </div>
            <div className="content">
              <p className="text-justify">En la INSTITUCIÓN EDUCATIVA SAN ANTONIO DE PADUA estamos comprometidos en la formación integral de sus educandos, desarrollando procesos de aprendizaje significativo a través de acciones pedagógicas desde la ciencia y la convivencia que posibiliten su desarrollo personal mejorando su calidad de vida y proyectándose a la comunidad.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Mision;