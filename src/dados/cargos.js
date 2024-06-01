
import { v4 as uuidv4 } from 'uuid';

const timeValores = [
    {
        id:uuidv4(),
        nome: 'Programação',
        corPrimaria: '#57C278'
    },
    {
        id:uuidv4(),
        nome: 'Front-End',
        corPrimaria: '#82CFFA'
    },
    {
        id:uuidv4(),
        nome: 'Data Science',
        corPrimaria: '#A6D157'
    },
    {
        id:uuidv4(),
        nome: 'Devops',
        corPrimaria: '#E06B69'
    },
    {
        id:uuidv4(),
        nome: 'Ux e Design',
        corPrimaria: '#DB6EBF'
    },
    {
        id:uuidv4(),
        nome: 'Mobile',
        corPrimaria: '#FFBA05'
    },
    {
        id:uuidv4(),
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29'
    }
]

const Colaboradores = [
    {
        id:uuidv4(),
        nome: 'Nicolinha',
        cargo: 'desenvolvedor',
        image: 'https://github.com/glenn-jocher.png',
        time: 'Programação',
        favorito:false,
    },
    {
        id:uuidv4(),
        nome: 'Luis Gilerme',
        cargo: 'Arch Linux',
        image: 'https://github.com/hdnh2006.png',
        time: 'Programação',
        favorito:false,
    },
    {
        id:uuidv4(),
        nome: 'Luis Gilerme',
        cargo: 'Arch Linux',
        image: 'https://github.com/hdnh2006.png',
        time: 'Devops',
        favorito:true,
    },
]

export { Colaboradores }
export default timeValores