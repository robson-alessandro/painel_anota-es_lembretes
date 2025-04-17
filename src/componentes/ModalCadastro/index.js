import './ModalCadastro.css'
import { useForm } from 'react-hook-form'

const ModalCadastro = ({aberto, adicionar}) => {
    const {register , handleSubmit} = useForm()
    
    if(aberto){
        return(
            <div className="modal-fundo">
                <div className='modal-formulario'>
                    <h3>Criar anotação</h3>
                    <form onSubmit={handleSubmit(adicionar)} className='formulario' >
                        <label>Data Aviso: <input type='date'  {...register('data')}></input></label>
                        <label>Cor Anotação: <input type='color' {...register('corFundo')}></input></label>
                        <label>Titulo: <input type='text' {...register('titulo')}></input></label>
                        <label htmlFor='input-conteudo'>Conteudo: </label>
                        <textarea id='input-conteudo'  {...register('conteudo')}></textarea>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        )

    }
}

export default ModalCadastro;