import './CriarCard.css'

const CriarCard = ({abrirModal})=>{

    return(
        <button 
            className='criar-card' 
            onClick={()=> abrirModal(true)}>
                <h2>Criar Lembrete ➕ </h2>
            </button>
    )
}

export default CriarCard;