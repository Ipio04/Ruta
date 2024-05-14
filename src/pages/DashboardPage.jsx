import React from 'react';
import { Link } from 'react-router-dom'; 

export const DashboardPage = () => {
  return (
    <div>
      <h1>DashboardPage</h1>
    
      <div>
        <Link to="/sorpresa">Ir a la página de imágenes</Link>
      </div>
      <div>
        <Link to="/video">Ir a la página de video</Link>
      </div>
      <div>
        <Link to="/blog">Ir a la página de blog</Link>
      </div>
      <img src="https://i.pinimg.com/originals/67/f4/d4/67f4d408608f115d75859025af640655.jpg" alt="Descripción de la imagen" />
    </div>
  );
};