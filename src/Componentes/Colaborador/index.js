import './Colaborador.css'

const Colaborador = ({ nome, cor, img, cargo }) => {
    // console.log(props)
    return (
        <div key={nome} className='card'>
            <div className='profile_picture' style={{ backgroundColor: cor }}>
                <img src={img} alt='foto de perfil do colaborador'></img>
            </div>
            <div className='descricao'>
                <div className='descricao__nome'>
                    {nome}
                </div>
                <div className='descricao__cargo'>
                    {cargo}
                </div>
            </div>
        </div>
    )
}

export default Colaborador