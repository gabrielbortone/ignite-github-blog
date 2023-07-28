import { useContext, useEffect, useState } from "react";
import { SearchFormContainer, SearchFormHeaderContainer, SearchFormInput } from "./styles";
import { GithubBlogContext } from "../../contexts/GithubBlogContext";

export default function SearchForm(){
    const { numberOfPosts, searchByQuery } = useContext(GithubBlogContext);
    const [searchParams, setSearchParams] = useState('');

    function handleSearchParams(e: any){
        const { value} = e.target;
        setSearchParams(value);
        searchByQuery(value);
    }

    return (
        <SearchFormContainer>
            <SearchFormHeaderContainer>
                <p>Publicações</p>
                <span>{numberOfPosts} publicações</span>
            </SearchFormHeaderContainer>
            <SearchFormInput placeholder="Buscar" value={searchParams} onChange={handleSearchParams}/>
        </SearchFormContainer>
    );
}