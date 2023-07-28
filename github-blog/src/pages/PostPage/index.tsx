import PagePostHeader from "../../components/PagePostHeader";
import Header from "../../components/Header";
import PagePostContent from "../../components/PagePostContent";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CompletePostById, GithubBlogContext } from "../../contexts/GithubBlogContext";

export default function PostPage(){
    let { id } = useParams();
    const { fetchActualPost } = useContext(GithubBlogContext);
    const [actualPost, setActualPost] = useState<CompletePostById | undefined>();

    useEffect(()=> {
        if(id){
            fetchActualPost(Number.parseInt(id)).then(data=> setActualPost(data));
        }
    }, [id])

    if(id){
        return <>
            <Header />
            <PagePostHeader url_repositorio={actualPost?.repository_url} comments_number={actualPost?.comments} title={actualPost?.title} />
            <PagePostContent description={actualPost?.body} />
         </>
    }

    return <h1>Não encontrado!</h1>
   
}