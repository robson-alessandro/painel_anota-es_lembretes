import Card from '../Card';
import './Mural.css'
import cards from '../../db/dbcards'

const Mural = () =>{
    return(
        <div className="conteudo_mural">
            {cards.map(card => 
            <Card 
                key={card.id} 
                data = {card.data} 
                titulo = {card.titulo} 
                corFundo = {card.corFundo}
                conteudo={card.conteudo}/>)}
           
        </div>
        
    )
}

export default Mural;