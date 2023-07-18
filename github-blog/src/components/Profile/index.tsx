import { TextBase, Title} from '../../themes/defaultTheme';
import { ProfileContainer, ProfileImageContainer, ProfileInfoContainer, ProfileInfoSpanItem, ProfileLinkToGithub, ProfileTextsContainer } from './styles';
import LinkIcon from '../../assets/redirectIcon.svg';
import githubIcon from '../../assets/github-icon.svg';
import organizationIcon from '../../assets/organization-icon.svg';
import usersIcon from '../../assets/users-icon.svg';

export default function Profile(){


    return(
        <ProfileContainer>
            <ProfileImageContainer>
                <img src=''/>
            </ProfileImageContainer>
            <ProfileTextsContainer>
                <div>
                    <Title>Gabriel Bortone</Title>
                    <ProfileLinkToGithub>GITHUB <img src={LinkIcon}/></ProfileLinkToGithub>
                </div>
                <TextBase>TEstesteststestete</TextBase>
                <ProfileInfoContainer>
                    <ProfileInfoSpanItem>
                        <img src={githubIcon}/>
                        <p>gabrielbortone</p>
                    </ProfileInfoSpanItem>
                    <ProfileInfoSpanItem>
                        <img src={organizationIcon}/>
                        <p>Datamar</p>
                    </ProfileInfoSpanItem>
                    <ProfileInfoSpanItem>
                        <img src={usersIcon}/>
                        <p>5 seguidores</p>
                    </ProfileInfoSpanItem>
                </ProfileInfoContainer>
            </ProfileTextsContainer>
        </ProfileContainer>
    )

}