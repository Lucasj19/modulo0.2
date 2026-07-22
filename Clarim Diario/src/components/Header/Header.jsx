import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext' 
import './Header.css'


function Header( { tema, aoAlternarTema }) {

    const { usuario, logout } = useAuth()
    
    const hoje = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    })

    return (
        <header className="cabecalho">
            <div className="cabecalho__faixa">
                <span>Edição de Nova York</span>
                <span>{hoje}</span>
                <span>U$ 1,50</span>
                <button className='cabecalho__tema' onClick={aoAlternarTema}>
                    {tema === 'light' ? ' 🌙 Escuro' : '☀️ Claro'}
                </button>
            </div>

            <h1 className="cabecalho__titulo">O CLARIM DIÁRIO</h1>
            <p className="cabecalho__lema">A verdade doa a quem doer - Inclusive a certos aracnídeos</p>

            <nav className="cabecalho__menu">
                <link to="/">Capa</link>
                <a href="">Cidade</a>
                <a href="">Ameaças Urbanas</a>
                <a href="">Opinião do Editor</a>
                <Link to="/cadastro">Assine</Link>
            </nav>
        </header>
    )
}

export default Header