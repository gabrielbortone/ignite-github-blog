import { PostPageHeaderMainContainer, PostPageHeaderInfoContainer, 
    PostPageHeaderInfoSpanItem,PostPageNavContainer } from "./styles"
import githubIcon from "../../assets/github-icon.svg";
import organizationIcon from "../../assets/organization-icon.svg";
import comments from "../../assets/comments.svg";
import { Title } from "../../themes/defaultTheme";
import goback from "../../assets/goback.svg";
import redirection from "../../assets/redirectIcon.svg";
import { useContext } from "react";
import { GithubBlogContext } from "../../contexts/GithubBlogContext";

interface PagePostHeaderProps {
    url_repositorio: string | undefined
    comments_number: number | undefined
    title: string | undefined
}


export default function PagePostHeader({ url_repositorio, comments_number,title } : PagePostHeaderProps){

    const { profile } = useContext(GithubBlogContext);

    function goHistoryBack(){
        history.back();
    }

    return <PostPageHeaderMainContainer>
        <PostPageNavContainer>
            <a onClick={goHistoryBack}>
                <img src={goback}/>
                Voltar
            </a>
            <a href={url_repositorio}>
                Ver no github
                <img src={redirection}/>
            </a>
        </PostPageNavContainer>
        <Title>{title}</Title>
        <PostPageHeaderInfoContainer>
            <PostPageHeaderInfoSpanItem>
                <img src={githubIcon}/>
                <p>{profile?.login}</p>
            </PostPageHeaderInfoSpanItem>
            <PostPageHeaderInfoSpanItem>
                <img src={organizationIcon}/>
                <p>{profile?.company ?? "Nenhuma"}</p>
            </PostPageHeaderInfoSpanItem>
            <PostPageHeaderInfoSpanItem>
                <img src={comments}/>
                <p>{comments_number} comentários</p>
            </PostPageHeaderInfoSpanItem>
        </PostPageHeaderInfoContainer>
    </PostPageHeaderMainContainer>

}