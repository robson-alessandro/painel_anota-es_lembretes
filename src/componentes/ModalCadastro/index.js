import './ModalCadastro.css'

const ModalCadastro = ({aberto}) => {
    if(aberto){
        return(
            <div className="modal-fundo">
                <div className='modal-formulario'>
                    <h3>Criar anotação</h3>
                    <form className='formulario'>
                        <label>Data Aviso: <input type='date'></input></label>
                        <label>Cor Anotação: <input type='color'></input></label>
                        <label>Titulo: <input type='text'></input></label>
                        <label htmlFor='input-conteudo'>Conteudo: </label>
                        <textarea id='input-conteudo' ></textarea>
                        
                    </form>
                </div>
            </div>
        )

    }
}

export default ModalCadastro;