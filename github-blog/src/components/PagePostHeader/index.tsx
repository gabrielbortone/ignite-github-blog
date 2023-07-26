import { PostPageHeaderMainContainer, PostPageHeaderInfoContainer, 
    PostPageHeaderInfoSpanItem,PostPageNavContainer } from "./styles"
import githubIcon from "../../assets/github-icon.svg";
import organizationIcon from "../../assets/organization-icon.svg";
import comments from "../../assets/comments.svg";
import { Title } from "../../themes/defaultTheme";
import goback from "../../assets/goback.svg";
import redirection from "../../assets/redirectIcon.svg";

export default function PagePostHeader(){
    return <PostPageHeaderMainContainer>
        <PostPageNavContainer>
            <a>
                <img src={goback}/>
                Voltar
            </a>
            <a>
                Ver no github
                <img src={redirection}/>
            </a>
        </PostPageNavContainer>
        <Title>JavaScript data types and data strctures</Title>
        <PostPageHeaderInfoContainer>
            <PostPageHeaderInfoSpanItem>
                <img src={githubIcon}/>
                <p>gabrielbortone</p>
            </PostPageHeaderInfoSpanItem>
            <PostPageHeaderInfoSpanItem>
                <img src={organizationIcon}/>
                <p>Datamar</p>
            </PostPageHeaderInfoSpanItem>
            <PostPageHeaderInfoSpanItem>
                <img src={comments}/>
                <p>5 seguidores</p>
            </PostPageHeaderInfoSpanItem>
        </PostPageHeaderInfoContainer>
    </PostPageHeaderMainContainer>

}