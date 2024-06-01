import './Colaborador.css'
import { TiDelete } from "react-icons/ti";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import { useState } from 'react';

const Colaborador = ({ id, nome, cor, img, cargo, aoDeletar, favorito }) => {
    
    const [fav, setFavorito] = useState(favorito)
    const mudarFavorito = () => {
        setFavorito(!fav)
    }
    return (
        <div key={id} className='card'>
            <div className='deletar'>
                <TiDelete size={32} color='#fff' onClick={() => aoDeletar(id)} />
            </div>

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
                <div className='favorito' onClick={mudarFavorito}>
                    {fav ? <MdOutlineFavorite size={24} />:<GrFavorite size={24} />}
                </div>
            </div>
        </div>
    )
}

export default Colaborador