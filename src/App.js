import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario'
import Time from './Componentes/Time';
import timeValores from './dados/cargos';
import { Colaboradores } from './dados/cargos';
import Footer from './Componentes/Footer';

function App() {
  const [colaboradores, setColaboradores] = useState(Colaboradores)

  const aoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const [times, setTimes] = useState(timeValores)

  return (
    <div className="App">
      <Banner />
      <Formulario
        setTimes={setTimes}
        times={times}
        aoColaborador={aoColaboradorCadastrado}
      />
      {times.map(cargo => {
        return <Time
          key={cargo.nome}
          nome={cargo.nome}
          corPrimaria={cargo.corPrimaria}
          corSegundaria={cargo.corSegundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === cargo.nome)}
          aoDeletar={deletarColaborador}
        />
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;
