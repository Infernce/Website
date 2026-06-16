import { type ArticleModule } from "../Components/ArticleModule"
import './ArticleSnippets.css'

export function ArticleHeader(articleModule: ArticleModule) {
    return (
       <div>
            <div className="articleHeaderTitle">
                <h1>{articleModule.meta.title}</h1>
            </div>
            <div className="articleHeaderBottom">
                <p className="articleHeaderInfoText">Date Published: {articleModule.meta.date_published}</p>
            </div>
       </div>
    )
}