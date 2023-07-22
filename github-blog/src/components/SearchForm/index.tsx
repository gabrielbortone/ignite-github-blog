import { SearchFormContainer, SearchFormHeaderContainer, SearchFormInput } from "./styles";

export default function SearchForm(){
    return (
        <SearchFormContainer>
            <SearchFormHeaderContainer>
                <p>Publicações</p>
                <span>6 publicações</span>
            </SearchFormHeaderContainer>
            <SearchFormInput placeholder="Buscar" />
        </SearchFormContainer>
    );
}