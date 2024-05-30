import Colaborador from '../Colaborador'
import './Time.css'
const Time = (props) => {

    const colaborador = props.colaboradores.map(colaborador => {
        return <Colaborador key={colaborador.nome} nome={colaborador.nome} img={colaborador.image} cor={props.corPrimaria} cargo={colaborador.cargo} />
    })
    return (
        props.colaboradores.length > 0 &&
        <section className="time" style={{ backgroundColor: props.corSegundaria }}>
            <h3>{props.nome}</h3>
            <div className='line' style={{ backgroundColor: props.corPrimaria }}></div>
            <div className='card__list'>
                {colaborador}
            </div>
        </section>
    )


}

export default Time