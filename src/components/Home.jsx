import React from 'react';
import Main from './Main';

const Home = (props) => {
  const { nombre, persona, grupo } = props;

  return (
    <div>
      <Main nombre={nombre} persona={persona} grupo={grupo} />
    </div>
  );
};
// Se reciben los props, los destructuramos y los reenviamos como props individuales a Main.jsx
export default Home;
