import { useState } from 'react'
import Botao from '../Botao/index.js'
import Campo from '../Campo/index.js'
import ListaItens from '../ListaItens'
import { v4 as uuidv4 } from 'uuid';


import './Formulario.css'


const Formulario = ({times, aoColaborador, setTimes}) => {

    const cargosTimesNome = times.map(time => time.nome)

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('Programação')
    const [novoTime, setNovoTime] = useState('')
    const [corTime, setCorTime] = useState('')

    function AoSalvar(e) {
        e.preventDefault()
        const formData = {
            id:uuidv4(),
            nome:nome,
            cargo:cargo,
            image:image,
            time:time
        }
        setNome('')
        setCargo('')
        setImage('')
        // console.log(formData)
        aoColaborador(formData)
    }

    function SalvarNovoTime(e) {
        e.preventDefault()
        setTimes(prevTimes => [...prevTimes, { nome:novoTime, corPrimaria:corTime, id: uuidv4() }])
        setNovoTime('')
        setCorTime('')
    }
    
    return (
        <section className="formulario">
            <form onSubmit={AoSalvar}>
                <h2>
                    Preencha os dados para criar o card do colaborador.
                </h2>

                <Campo
                    valor={nome}
                    alterandoValor={valor => setNome(valor.toLocaleUpperCase())}
                    label='nome'
                    obrigatorio
                />
                <Campo
                    valor={cargo}
                    alterandoValor={valor => setCargo(valor)}
                    label='cargo'
                    obrigatorio
                />
                <Campo
                    valor={image}
                    alterandoValor={valor => setImage(valor)}
                    label='Imagem'
                    customLabel='Envie o endereço da imagem'
                    obrigatorio
                />
                <ListaItens
                    valor={time}
                    alterandoValor={valor => setTime(valor)}
                    label='Time'
                    itens={cargosTimesNome}
                    obrigatorio
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={SalvarNovoTime}>
                <h2>
                    Preencha os dados para criar um Novo Time.
                </h2>
                <Campo
                    valor={novoTime}
                    alterandoValor={valor => setNovoTime(valor)}
                    label='time'
                    obrigatorio
                />
                <Campo
                    valor={corTime}
                    alterandoValor={valor => setCorTime(valor)}
                    label='cor do Time'
                    obrigatorio
                    tipoCampo='color'
                />
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario