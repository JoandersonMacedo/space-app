import { Children } from "react"
import styled from "styled-components"

const ItemDeListaEstilizado = styled.li`
    display: flex;
    align-items: center;
    gap: 22px;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color:  ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family:  ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
`

export default function ItemDeNavegacao({ children, iconeAtivo, iconeInativo, ativo = false }) {
    return (
        <ItemDeListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="Icone do item" />
            {children}
        </ItemDeListaEstilizado>
    )
}