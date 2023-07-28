import { ReactNode, createContext, useEffect, useState } from "react";
import { api, apiBlog, apiBlogIssues, repositorioBlog } from "../lib/api";

interface GithubBlogContextProviderProps {
    children: ReactNode;
}
interface  GithubBlogContextProviderContextType {
    profile: GithubProfile | undefined
    posts: CompletePost[] | undefined
    fetchActualPost: (id: number) => Promise<CompletePostById | undefined>
    numberOfPosts: number
    searchByQuery: (value: string) => void
}

interface GithubProfile{
    avatar_url: string
    bio: string,
    followers: number
    login: string
    html_url: string
    name: string
    company: string | null
    public_repos: number
}

export interface CompletePost {
    title: string
    numberOfComments: number
    content: string
    created_at: string
    id: number
}

export interface CompletePostById{
    repository_url: string
    title: string
    number: number
    body: string
    comments: number,
    created_at: string
}

export const GithubBlogContext = createContext<GithubBlogContextProviderContextType>({} as GithubBlogContextProviderContextType)

export function GithubBlogContextProvider({children}: GithubBlogContextProviderProps) {
    const [profile, setProfile] = useState<GithubProfile>();
    const [posts, setPosts] = useState<CompletePost[] | undefined>([]);
    const [query, setQuery] = useState<string | undefined>(' ');
    const [numberOfPosts, setNumberOfPosts] = useState<number>(0);

    useEffect(()=>{
        fetchUsuario();
    }, []);

    useEffect(()=> {
        fetchPosts(query);
    }, [query])

    useEffect(() => {
        setNumberOfPosts(posts?.length ?? 0);
    }, [posts])

    function searchByQuery(value: string){
        setQuery(value);
    }


    async function fetchActualPost(id: number) {
        const response = await apiBlogIssues.get(`/${id}`);
        const { data } = response;
        const {repository_url, title, number, body, comments, created_at} = data;

        if(data){
            return {
                repository_url,
                title,
                number,
                body,
                comments,
                created_at
            } as CompletePostById
        }
        
        return undefined;
    }

    async function fetchPosts(query?: string) {
        const response = await apiBlog.get('', {
            params: {
                q: `${query}repo:${repositorioBlog}`
            }
        }) 
        const { items } = response.data;
        const posts = items.map((item: any)=> {
            return {
                title: item.title,
                numberOfComments: item.comments,
                content: item.body,
                created_at: item.created_at,
                id: item.number
            }
        });
        setPosts(posts);
    }

    async function fetchUsuario(){
        const response = await api.get("");
        const {avatar_url, bio, followers, login, html_url, company, name, public_repos} = response.data;
        setProfile({
            avatar_url,
            bio,
            followers,
            login,
            html_url,
            company,
            name,
            public_repos
        })
    }
    
    return (
        <GithubBlogContext.Provider value={{profile, posts, numberOfPosts, fetchActualPost, searchByQuery}}>
            {children}
        </GithubBlogContext.Provider>
    )
}