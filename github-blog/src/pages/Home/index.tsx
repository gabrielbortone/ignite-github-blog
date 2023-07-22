import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Posts from "../../components/Posts";
import SearchForm from "../../components/SearchForm";

export default function Home(){
    return <div>
        <Header />
        <Profile/>
        <SearchForm />
        <Posts />
    </div>
}