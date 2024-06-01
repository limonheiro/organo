import './Campo.css'

const CampoTexto = ({label, alterandoValor, tipoCampo ='text', valor, obrigatorio, customLabel}) => {

    const UppercaseLabel = label.charAt(0).toUpperCase() + label.slice(1)
    const newPlaceholder = `${customLabel || 'Digite o seu ' + UppercaseLabel}`


    const aoDigitado = (evento) => {
        alterandoValor(evento.target.value)
    }
    // const tipoCampo = tipoCampo && "type='tipoCampo'"
    return (
        <div className={`campo-${tipoCampo}`}>
            <label>{UppercaseLabel}</label>
            <input
                type={tipoCampo}
                name={label}
                id={label}
                value={valor}
                onChange={aoDigitado}
                placeholder={newPlaceholder}
                required={obrigatorio}
            />
        </div>
    )
}

export default CampoTexto