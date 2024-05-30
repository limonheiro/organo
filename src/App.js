import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario'
import Time from './Componentes/Time';
import timeValores from './dados/cargos';
import Footer from './Componentes/Footer';

function App() {
  const [colaboradores, setColaboradores] = useState([])

  
  const aoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaborador={aoColaboradorCadastrado} />
      {timeValores.map(cargo => {
        return <Time
          key={cargo.nome}
          nome={cargo.nome}
          corPrimaria={cargo.corPrimaria}
          corSegundaria={cargo.corSegundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === cargo.nome)}
        />
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;
