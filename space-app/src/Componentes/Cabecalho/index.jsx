import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
padding: 60px 0;
display: flex;
justify-content: space-between;
`;

export default function Cabecalho () {
    return (
        <HeaderEstilizado>
            <img src="/imagens/Logo.png" alt="Logo do space app" />
            <CampoTexto />
        </HeaderEstilizado>
    )
}