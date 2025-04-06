import { useState } from 'react';
import './Card.css';

const Card =({data, titulo, conteudo, corFundo})=>{

    const [corFundoCard, setCorFundoCard] = useState(corFundo)

    return(
        <div className='card' style={{backgroundColor:corFundoCard}}>
            <div className='cabecalho-card'>
                <h2>{data}</h2>
                <h2>{titulo}</h2>
                <input  type='color' value={corFundoCard}  onChange={ evento => setCorFundoCard(evento.target.value)}></input>
            </div>
            
            <p>{conteudo}</p>
        </div>

    )
}

export default Card;