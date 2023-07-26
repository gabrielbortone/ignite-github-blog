import { HeaderContainer, HeaderContainerItem, LogoPrincipalContainer } from "./styles";
import effect1 from '../../assets/effect.png';
import effect2 from '../../assets/effect2.png';
import logoImagem from '../../assets/logo.svg';

export default function Header(){
    return (
        <HeaderContainer>
            <HeaderContainerItem><img src={effect1} /></HeaderContainerItem>
            <LogoPrincipalContainer>
                <img src={logoImagem}/>
                <p>GITHUB BLOG</p>
            </LogoPrincipalContainer>
            <HeaderContainerItem><img src={effect2} /></HeaderContainerItem>
        </HeaderContainer>
    );
}