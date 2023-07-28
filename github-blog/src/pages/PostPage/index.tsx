import PagePostHeader from "../../components/PagePostHeader";
import Header from "../../components/Header";
import PagePostContent from "../../components/PagePostContent";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CompletePost, GithubBlogContext } from "../../contexts/GithubBlogContext";

export default function PostPage(){
    let { id } = useParams();
    const { posts } = useContext(GithubBlogContext);

    useEffect(()=> {
        if(id && posts){
            const identifier = parseInt(id);
            setActualPost(posts.find(post => post.id === identifier));
        }
    }, [id])

    if(actualPost){
        return <>
            <Header />
            <PagePostHeader />
            <PagePostContent description={actualPost.content} />
         </>
    }

    return <h1>Não encontrado!</h1>
   
}