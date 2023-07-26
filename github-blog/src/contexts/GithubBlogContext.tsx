import { ReactNode, createContext, useEffect, useState } from "react";
import { api, apiBlog, repositorioBlog } from "../lib/api";

interface GithubBlogContextProviderProps {
    children: ReactNode;
}
interface  GithubBlogContextProviderContextType {
    profile: GithubProfile | undefined
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

interface CompletePost {
    title: string
    numberOfComments: number
    content: string
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
        console.log(response);
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
        <GithubBlogContext.Provider value={{profile}}>
            {children}
        </GithubBlogContext.Provider>
    )
}