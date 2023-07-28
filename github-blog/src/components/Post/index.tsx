import { PostContainer, PostTimeSpan, PostContentContainer, 
    PostHeaderContainer,PostHeaderTitulo , PostContentLink} from "./styles";

import {CompletePost} from "../../contexts/GithubBlogContext";
import { formatDistanceStrict } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Post({id, title, content, created_at}: CompletePost){
    const parsedDate = new Date(created_at);
    const past = formatDistanceStrict(parsedDate, new Date(), {
        locale: ptBR
    }); // true

    return (
        <PostContentLink to={`/post/${id}`}>
            <PostContainer>
                <PostHeaderContainer>
                    <span><PostHeaderTitulo>{title}</PostHeaderTitulo></span>
                    <PostTimeSpan>Há {past}</PostTimeSpan>
                </PostHeaderContainer>
                <PostContentContainer>
                    <p>{content}</p>
                </PostContentContainer>
            </PostContainer>
        </PostContentLink>
    )
}