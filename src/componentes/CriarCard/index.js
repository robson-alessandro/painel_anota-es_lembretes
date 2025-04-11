import './CriarCard.css'

const CriarCard = ()=>{
    function CriarCard(){
        console.log('card criado')
    }
    return(
        <button className='criar-card' onClick={CriarCard}><h2>criar card ➕ </h2></button>
    )
}

export default CriarCard;