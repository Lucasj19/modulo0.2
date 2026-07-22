import './NewsCard.css'
import { Link } from 'react-router-dom' 

function NewsCard ({ categoria, titulo, resumo }) {
    return (
        <article className='card'>
            <span className='card__categoria'>{categoria}</span>
            <h3 className='card__titulo'>{titulo}
                <Link to={"materia/${id}"}>{titulo}</Link>
            </h3>

            {resumo && <p className='card__resumo'>{resumo}</p>}
        </article>
    )
}

export default NewsCard