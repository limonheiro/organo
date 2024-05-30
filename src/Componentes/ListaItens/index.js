import { useState } from 'react'
import './ListaItens.css'

const ListaItens = (props) => {

    const [valor, setValor] = useState('')
    const aoDigitado = (evento) => {
        if (props.alterandoValor) {
            props.alterandoValor(evento.target.value)
            // console.log(props.valor)
        } else {
            setValor(evento.target.value)
            console.log(valor)
        }
    }
    // console.log(props.itens.map((item) => <option key={item}>{item}</option>))
    
    return (
        <div className='lista'>
            <label>{props.label}</label>
            <select name={props.label} value={props.valor} onChange={aoDigitado} required={props.obrigatorio}>
                {props.itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaItens