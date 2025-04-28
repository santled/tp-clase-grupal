import React from 'react';
import '../styles/Main.css';

const Main = ({ nombre, persona, grupo }) => {
  return (
    <main className="main-container">
      <section className="section">
        <h2>Nombre recibido:</h2>
        <p>{nombre}</p>
      </section>
    
      <section className="section">
        <h2>Datos de la persona:</h2>
        <ul>
          <li>Nombre: {persona.nombre}</li>
          <li>Edad: {persona.edad}</li>
          <li>Curso: {persona.curso}</li>
          <li>Asistencia: {persona.Asistencia ? "Presente" : "Ausente"}</li>
        </ul>
      </section>

      <section className="section">
        <h2>Grupo de integrantes:</h2>
        <ul>
          {grupo.map((integrante, index) => (
            <li key={index}>
              {integrante.nombre} - {integrante.edad} años
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
// Mostramos el nombre, desplegamos una lista con los datos de la persona y su asistencia, y recorremos el array grupo con .map() para mostrar los datos de cada intregrante

export default Main;
