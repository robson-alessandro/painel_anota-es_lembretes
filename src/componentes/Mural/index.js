import Card from '../Card';
import './Mural.css'
import cards from '../../db/dbcards'
import CriarCard from '../CriarCard';

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
            <CriarCard/>
           
        </div>
        
    )
}

export default Mural;