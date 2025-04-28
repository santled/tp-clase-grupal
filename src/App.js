// NOMBRES Y LEGAJOS
// Paulo Ledesma - 61035
// Santiago Ledesma - 61115
// Jose Quiroga - 61033
// Leonardo Ramirez - 61084
// Santiago Navarro - 61205

import './styles/App.css';
import Homepages from './pages/Homepages';

function App() {
  let nombre = "Pablo";
  let persona = { nombre: 'Carlos', edad: 20, curso: 'programación', Asistencia: false };
  let grupo = [
    { nombre: 'Lucas', edad: 25 },
    { nombre: 'Luciana', edad: 19 },
    { nombre: 'Julieta', edad: 26 },
    { nombre: 'Jorge', edad: 30 },
    { nombre: 'Cristian', edad: 30 }
  ];

  return (
    <div className="App">
      <Homepages nombre={nombre} persona={persona} grupo={grupo} />
    </div>
  );
}

export default App;

