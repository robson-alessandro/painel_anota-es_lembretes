import './Card.css';

const Card =({data, titulo, conteudo, corFundo})=>{

    return(
        <div className='card' style={{backgroundColor:corFundo}}>
            <div className='cabecalho-card'>
                <h2>{data}</h2>
                <h2>{titulo}</h2>
            </div>
            
            <p>{conteudo}</p>
        </div>

    )
}

export default Card;