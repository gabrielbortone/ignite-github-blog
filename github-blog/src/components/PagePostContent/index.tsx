import { PagePostContentContainer, PagePostContentParagraph } from "./styles";

interface PagePostContentProps {
    description: string | undefined
}

export default function PagePostContent({description} : PagePostContentProps){
    return (
        <PagePostContentContainer>
            <PagePostContentParagraph>
                {description}
            </PagePostContentParagraph>
        </PagePostContentContainer>

    );
}