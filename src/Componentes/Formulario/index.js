import { useState } from 'react'
import timeValores from '../../dados/cargos.js'
import Botao from '../Botao/index.js'
import CampoTexto from '../CampoTexto'
import ListaItens from '../ListaItens'

import './Formulario.css'


const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('Programação')
    
    function AoSalvar (e){
        e.preventDefault()
        const formData={
            nome,
            cargo,
            image,
            time
        }
        setNome('')
        setCargo('')
        setImage('')
        props.aoColaborador(formData)
    }
    const cargosTimesNome = timeValores.map(time => time.nome)
    return (
        <section className="formulario">
            <form onSubmit={AoSalvar}>
                <h2>
                    Preencha os dados para criar o card do colaborador.
                </h2>
    
                <CampoTexto 
                    valor = {nome}
                    alterandoValor={valor => setNome(valor.toLocaleUpperCase())} 
                    label='nome'
                    obrigatorio
                />
                <CampoTexto 
                    valor={cargo}
                    alterandoValor={cargo => setCargo(cargo)}
                    label='cargo' 
                    obrigatorio
                />
                <CampoTexto 
                    valor={image}
                    alterandoValor={image => setImage(image)}
                    label='Imagem' 
                    customLabel='Envie o endereço da imagem' 
                    obrigatorio
                />
                <ListaItens 
                    valor={time}
                    alterandoValor={time=>setTime(time)}
                    label='Time' 
                    itens={cargosTimesNome} 
                    obrigatorio
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario