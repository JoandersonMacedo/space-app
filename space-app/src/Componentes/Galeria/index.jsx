import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
display: flex;
`

const SecaoFluida = styled.section`
flex-grow: 1;
`

const ImagensContainer = styled.ul`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
list-style: none;
gap: 24px;
padding: 0;
margin: 0;
`

export default function Galeria({fotos = [] , aoFotoSelecionada, aoAlternarFavorito }) {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <li key={foto.id}><Imagem foto={foto} aoZoonSolicitado={aoFotoSelecionada} aoAlternarFavorito={aoAlternarFavorito} /></li>)}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}