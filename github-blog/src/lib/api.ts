import axios from "axios";

const userName = 'gabrielbortone';
export const repositorioBlog = 'gabrielbortone/ignite-github-blog';


export const api = axios.create({
    baseURL: `https://api.github.com/users/${userName}`
});

export const apiBlog = axios.create({
    baseURL: `https://api.github.com/search/issues`
});

export const apiBlogIssues = axios.create({
    baseURL: `https://api.github.com/repos/${repositorioBlog}/issues`
})

