import React from 'react';
import '../styles/components/vision.css'
import vision from '../img/vision.jpg'
const Vision = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
            <img  className="img-component mt-3" src={vision} alt={vision}/>
        </div>
        <div className="col-7">
            <div className="title mt-3">
              <h1>Visión is</h1>
            </div>
            <div className="content">
              <p className="text-justify">La INSTITUCIÓN EDUCATIVA SAN ANTONIO DE PADUA con el apoyo de todos los integrantes de la comunidad educativa, ofrecerá un excelente servicio formativo, con calidad que permita a sus usuarios convertirse en lideres competentes, a portantes al desarrollo social, económico, científico, Técnica y Ecológico, artístico y cultural del país.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;