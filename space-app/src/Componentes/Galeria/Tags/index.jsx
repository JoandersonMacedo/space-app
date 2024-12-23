import styled from 'styled-components'
import tags from './tags.json'

const Container = styled.div`
display: flex;
text-align: center;
gap: 10px;
margin-top: 32px;
`

const TagTitulo = styled.h3`
font-size: 24px;
color: #D9D9D9;
margin: auto 48px auto 0;
`

const TagContainer = styled.div`
display: flex;
gap: 10px;
`

const Tag = styled.button`
padding: 10px 8px;
font-size: 24px;
color: #FFFFFF;
background-color: #D9D9D94D;
border-radius: 10px;
box-sizing: border-box;
transition: background-color 0.3s ease;
border: solid 2px transparent;
&:hover{
    border-color: #C98CF1;;
}
`

export default function Tags() {
    return (
        <Container>
            <TagTitulo>Busque por tags:</TagTitulo>
            <TagContainer>
                {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
            </TagContainer>
            
        </Container>
    )
}