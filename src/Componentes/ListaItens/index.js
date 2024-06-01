import { useState } from 'react'
import './ListaItens.css'

const ListaItens = (props) => {

    const [valor, setValor] = useState('')
    const aoDigitado = (evento) => {
        if (props.alterandoValor) {
            props.alterandoValor(evento.target.value)
        } else {
            setValor(evento.target.value)
            console.log(valor)
        }
    }

    return (
        <div className='lista'>
            <label>{props.label}</label>
            <select
                name={props.label}
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
            >
                {props.itens.map((item, index) => {
                    return <option key={index}>
                            {item}
                            </option>
                })}
            </select>
        </div>
    )
}

export default ListaItens