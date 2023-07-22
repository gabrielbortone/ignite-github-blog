import { PostContainer, PostTimeSpan, PostContentContainer, 
    PostHeaderContainer,PostHeaderTitulo } from "./styles"

export default function Post(){
    return (
        <PostContainer>
            <PostHeaderContainer>
                <span><PostHeaderTitulo>JavaScript data types and data structures</PostHeaderTitulo></span>
                <PostTimeSpan>Há 1 dia</PostTimeSpan>
            </PostHeaderContainer>
            <PostContentContainer>
                <p>Programming languages all have built-in data structures, but these often differ from one language to another. 
                    This article attempts to list the built-in data structures available in JavaScript and what properties they have. 
                    These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
            </PostContentContainer>
        </PostContainer>
    )
}