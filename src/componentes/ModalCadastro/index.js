import './ModalCadastro.css'
import { useForm } from 'react-hook-form'

const ModalCadastro = ({aberto, adicionar, fechar}) => {

    const {register , handleSubmit, reset} = useForm()
    const enviarDados = (dados) =>{
        adicionar(dados)
        reset()
    }

    const fecharModal=()=>{
        fechar()
        reset()
    }

    if(aberto){
        return(
            <div className="modal-fundo">
                <div className='modal-formulario'>
                    <div className='botao-fechar'>
                        <button onClick={fecharModal}>X</button>
                    </div>
                    <h3 className='titulo-modal'>Criar Lembrete</h3>
                    <form 
                        onSubmit={handleSubmit(enviarDados)} 
                        className='formulario' >
                            
                        <label>Data Aviso: <input type='date' {...register('data')}></input></label>
                        <label>Cor Fundo: <input type='color' {...register('corFundo')}></input></label>
                        <label>Titulo: <input type='text' {...register('titulo')}></input></label>
                        <label htmlFor='input-conteudo'>Conteudo: </label>
                        <textarea id='input-conteudo'  {...register('conteudo')}></textarea>
                        <button>Salvar</button>
                    </form>
                </div>
            </div>
        )

    }
}

export default ModalCadastro;