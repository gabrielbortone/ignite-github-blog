import { PostContainer, PostTimeSpan, PostContentContainer, 
    PostHeaderContainer,PostHeaderTitulo , PostContentLink} from "./styles";

import {CompletePost} from "../../contexts/GithubBlogContext";


export default function Post({id, title, content, created_at}: CompletePost){
    return (
        <PostContentLink to={`/post/${id}`}>
            <PostContainer>
                <PostHeaderContainer>
                    <span><PostHeaderTitulo>{title}</PostHeaderTitulo></span>
                    <PostTimeSpan>Há 1 dia</PostTimeSpan>
                </PostHeaderContainer>
                <PostContentContainer>
                    <p>{content}</p>
                </PostContentContainer>
            </PostContainer>
        </PostContentLink>
    )
}