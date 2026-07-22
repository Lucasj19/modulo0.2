import { useParams } from 'react-router-dom'
import { noticias } from '../../data/noticias'
import './Materia.css'

function Materia () {
    const { id } = useParams()

    const noticia = noticias.find(n => n.id === Number(id))

    if(!noticia) {
        return (
            <main className='container'>
                <p>Matéria não encontrada - Nem o Homem Aranha Destruiria uma página tão rápido</p>
                <link to="/">Voltar á capa</link>
            </main>
        )
    }

    return (
        <main className='container materia'>
            <link to="/" className='materia_voltar'>Voltar á capa</link>
            <spain className= 'materia__categoria'>{noticia.categoria}</spain>
            <h1>{noticia.titulo}</h1>
            <p className='materia__resumo'>{noticia.resumo}</p>
            <div className='materia__texto'> 
                <p>{noticias.texto}</p>
            </div>
        </main>
    )
}

export default Materia