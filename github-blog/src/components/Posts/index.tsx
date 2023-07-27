import { PostsContainer } from "./styles";
import Post from "../Post";
import { useContext } from "react";
import { GithubBlogContext } from "../../contexts/GithubBlogContext";

export default function Posts(){

    const { posts } = useContext(GithubBlogContext);
    return (
        <PostsContainer>
            {posts?.map(item => <Post key={item.id} {...item} />)}    
        </PostsContainer>
    );
}