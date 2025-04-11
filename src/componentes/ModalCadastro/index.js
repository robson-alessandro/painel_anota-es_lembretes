import './ModalCadastro.css'

const ModalCadastro = ({aberto}) => {
    if(aberto){
        return(
            <div className="modal-fundo">
                <div className='modal-formulario'>
                    <h2>cadastrar card</h2>
                </div>
            </div>
        )

    }
}

export default ModalCadastro;