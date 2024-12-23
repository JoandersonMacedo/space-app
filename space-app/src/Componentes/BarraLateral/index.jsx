import styled from "styled-components"
import ItemDeNavegacao from "../ItemDeNavegacao"

const ListaEstilizada = styled.ul`
list-style: none;
padding: 0;
margin: 0;
width: 212px;
`

export default function BarraLateral() {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemDeNavegacao
                        iconeAtivo={'/icones/home-ativo.png'}
                        iconeInativo={'/icones/home-inativo.png'}
                        ativo
                    >
                        Inicio
                    </ItemDeNavegacao>
                    <ItemDeNavegacao
                        iconeAtivo={'/icones/mais-vistas-ativo.png'}
                        iconeInativo={'/icones/mais-vistas-inativo.png'}
                    >
                        Mais vistas
                    </ItemDeNavegacao>
                    <ItemDeNavegacao
                        iconeAtivo={'/icones/mais-curtidas-ativo.png'}
                        iconeInativo={'/icones/mais-curtidas-inativo.png'}
                    >
                        Mais curtidas
                    </ItemDeNavegacao>
                    <ItemDeNavegacao
                        iconeAtivo={'/icones/novas-ativo.png'}
                        iconeInativo={'/icones/novas-inativo.png'}
                    >
                        Novas
                    </ItemDeNavegacao>
                    <ItemDeNavegacao
                        iconeAtivo={'/icones/surpreenda-me-ativo.png'}
                        iconeInativo={'/icones/surpreenda-me-inativo.png'}
                    >
                        Surpreenda-me
                    </ItemDeNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}