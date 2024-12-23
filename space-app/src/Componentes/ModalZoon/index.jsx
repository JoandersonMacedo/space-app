import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone";

const Overley = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed; 
    top: 0; 
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    display: flex;
    align-items: center;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

export default function ModalZoon({ foto , aoAlternarFavorito, aoFechar }) {
    return (
        <>
            {foto && <>
                <Overley />
                <DialogEstilizado open={!!foto} onClose={aoFechar} >
                    <Imagem foto={foto} aoAlternarFavorito={aoAlternarFavorito} expandida />
                    <form method="dialog">
                        <BotaoIcone formMethod="dialog" >
                            <img src="/icones/fechar.png" alt="Icone de fechar" />
                        </BotaoIcone>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}