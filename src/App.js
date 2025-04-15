import Cabecalho from "./componentes/cabecalho";
import ModalCadastro from "./componentes/ModalCadastro";
import Mural from "./componentes/Mural";

function App() {
  return (
    <div >
      <Cabecalho/>
      <Mural/>
      <ModalCadastro aberto={false}/>
 
    </div>
  );
}

export default App;
