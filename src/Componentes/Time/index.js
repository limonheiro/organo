import { useState } from 'react'
import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ colaboradores, nome, corPrimaria, corSegundaria, aoDeletar }) => {

    const [corFundo, setCorFundo] = useState(corPrimaria)

    const colaborador = colaboradores.map((colaborador, index) => {
        return <Colaborador
            key={index}
            id={colaborador.id}
            nome={colaborador.nome}
            img={colaborador.image}
            cor={corFundo}
            cargo={colaborador.cargo}
            favorito={colaborador.favorito}
            aoDeletar={aoDeletar}
        />
    })

    const corMudar = (event) => {
        setCorFundo(event.target.value)
    }
    return (
        colaboradores.length > 0 &&
        <section className="time" style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: corFundo + '66' }}>
            <input type='color' className='input-color' value={corFundo} onChange={corMudar} />
            <h3>{nome}</h3>
            <div className='line' style={{ backgroundColor: corFundo }}></div>
            <div className='card__list'>
                {colaborador}
            </div>
        </section>
    )

}

export default Time