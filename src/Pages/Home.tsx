import './Home.css'
import ArticlesContainer from "../Components/ArticlesContainer";

export default function Home() {
    return (
        <div className="home">
            <h1><b>Hi! I am <i>Infernce</i></b> and I do Things Sometimes!</h1>
            <h2>Welcome to my little corner of the internet where I post all of the things I write/make!</h2>

            <br/>
            <br/>
            <br/>

            <h2><b className='h2Bright'>Posts You Can Read</b></h2>
            <ArticlesContainer/>
        </div>
    );
}