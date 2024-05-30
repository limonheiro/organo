import './CampoTexto.css'

const CampoTexto = (props) => {

    const UppercaseLabel = props.label.charAt(0).toUpperCase() + props.label.slice(1)
    const newPlaceholder = `${props.customLabel || 'Digite o seu ' + UppercaseLabel}`


    const aoDigitado = (evento) => {
        props.alterandoValor(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{UppercaseLabel}</label>
            <input
                name={props.label}
                id={props.label}
                value={props.valor}
                onChange={aoDigitado}
                placeholder={newPlaceholder}
                required={props.obrigatorio}
            />
        </div>
    )
}

export default CampoTexto