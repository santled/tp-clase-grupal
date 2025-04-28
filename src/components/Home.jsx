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

export default Home;
