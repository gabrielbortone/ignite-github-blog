import { TextBase, Title} from '../../themes/defaultTheme';
import { ProfileContainer, ProfileImageContainer, ProfileInfoContainer, ProfileInfoSpanItem, ProfileLinkToGithub, ProfileTextsContainer } from './styles';
import LinkIcon from '../../assets/redirectIcon.svg';
import githubIcon from '../../assets/github-icon.svg';
import organizationIcon from '../../assets/organization-icon.svg';
import usersIcon from '../../assets/users-icon.svg';
import { useContext } from 'react';
import { GithubBlogContext} from "../../contexts/GithubBlogContext";

export default function Profile(){
    const {profile} = useContext(GithubBlogContext);

    return(
        <ProfileContainer>
            <ProfileImageContainer>
                <img src={profile?.avatar_url}/>
            </ProfileImageContainer>
            <ProfileTextsContainer>
                <div>
                    <Title>{profile?.name}</Title>
                    <ProfileLinkToGithub href={profile?.html_url}>GITHUB <img src={LinkIcon}/></ProfileLinkToGithub>
                </div>
                <TextBase>{profile?.bio}</TextBase>
                <ProfileInfoContainer>
                    <ProfileInfoSpanItem>
                        <img src={githubIcon}/>
                        <p>{profile?.login}</p>
                    </ProfileInfoSpanItem>
                    <ProfileInfoSpanItem>
                        <img src={organizationIcon}/>
                        <p>{profile?.company ?? 'Nenhuma'}</p>
                    </ProfileInfoSpanItem>
                    <ProfileInfoSpanItem>
                        <img src={usersIcon}/>
                        <p>{profile?.followers} seguidores</p>
                    </ProfileInfoSpanItem>
                </ProfileInfoContainer>
            </ProfileTextsContainer>
        </ProfileContainer>
    )

}