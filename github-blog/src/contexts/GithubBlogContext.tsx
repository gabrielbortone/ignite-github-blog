import { ReactNode, createContext, useEffect, useState } from "react";
import { api, apiBlog, repositorioBlog } from "../lib/api";

interface GithubBlogContextProviderProps {
    children: ReactNode;
}
interface  GithubBlogContextProviderContextType {
    profile: GithubProfile | undefined
    posts: CompletePost[] | undefined
}

interface GithubProfile{
    avatar_url: string
    bio: string,
    followers: number
    login: string
    html_url: string
    name: string
    company: string | null
}

export interface CompletePost {
    title: string
    numberOfComments: number
    content: string
    created_at: string
    id: number
}

export const GithubBlogContext = createContext<GithubBlogContextProviderContextType>({} as GithubBlogContextProviderContextType)

export function GithubBlogContextProvider({children}: GithubBlogContextProviderProps) {
    const [profile, setProfile] = useState<GithubProfile>();
    const [posts, setPosts] = useState<CompletePost[] | undefined>([]);
    const [query, setQuery] = useState<string | undefined>(' ');

    useEffect(()=>{
        fetchUsuario();
    }, []);

    useEffect(()=> {
        fetchPosts(query);
    }, [query])

    async function fetchPosts(query?: string) {
        const response = await apiBlog.get('', {
            params: {
                q: `${query}repo:${repositorioBlog}`
            }
        }) 
        const { items } = response.data;
        console.log(items);
        const posts = items.map((item: any)=> {
            return {
                title: item.title,
                numberOfComments: item.comments,
                content: item.body,
                created_at: item.created_at,
                id: item.id
            }
        });
        setPosts(posts);
    }

    async function fetchUsuario(){
        const response = await api.get("");
        const {avatar_url, bio, followers, login, html_url, company, name} = response.data;
        setProfile({
            avatar_url,
            bio,
            followers,
            login,
            html_url,
            company,
            name
        })
    }
    
    return (
        <GithubBlogContext.Provider value={{profile, posts}}>
            {children}
        </GithubBlogContext.Provider>
    )
}