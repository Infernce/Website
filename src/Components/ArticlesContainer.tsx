import './ArticlesContainer.css'
import { GetArticleBoxData } from "../ArticleRegistry";

export default function () {
    return (
        <div className='articlesContainerGrid'>
            {GetArticleBoxData()}
        </div>
    );
}