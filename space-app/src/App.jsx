import styled from "styled-components";
import EstilosGlobais from "./Componentes/EstilosGlobais";
import Cabecalho from "./Componentes/Cabecalho";
import BarraLateral from "./Componentes/BarraLateral";
import Banner from "./Componentes/Banner";
import Galeria from "./Componentes/Galeria";
import fotosJson from './fotos.json';
import { useState } from "react";
import ModalZoon from "./Componentes/ModalZoon";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

const LinearGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100vw;
  min-height: 100vh
`;

const AppConteiner = styled.div`
max-width: 100%;
margin: 0 auto;
width: 1440px;
`

const MainConteiner = styled.main`
display: flex;
gap: 24px;
`

const GaleriaConteiner = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;
`

function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotosJson);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    if(foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria =>{
      return {...fotoDaGaleria,
      favorita: foto.id === fotoDaGaleria.id ? !foto.favorita : fotoDaGaleria.favorita}
    }))
  };

  return (
    <LinearGradiente>
      <EstilosGlobais />
      <AppConteiner>
        <Cabecalho />
        <MainConteiner>
          <BarraLateral />
          <GaleriaConteiner>
            <Banner backgroundImage={'/imagens/banner.png'} texto={'A galeria mais completa de fotos do espaço!'} />
            <Galeria fotos={fotosDaGaleria} aoFotoSelecionada={foto => setFotoSelecionada(foto)} aoAlternarFavorito={aoAlternarFavorito} />
          </GaleriaConteiner>
        </MainConteiner>
      </AppConteiner>
      <ModalZoon aoFechar={() => setFotoSelecionada(null)} foto={fotoSelecionada} aoAlternarFavorito={aoAlternarFavorito} />
    </LinearGradiente>
  )
}

export default App
