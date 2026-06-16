import { type ArticleModule } from "./ArticleModule"
import './ArticleSnippets.css'

export function ArticleHeader(articleModule: ArticleModule) {
    return (
       <div>
            <div className="articleHeaderTitle">
                <h1>{articleModule.meta.title}</h1>
            </div>
            <div className="articleHeaderBottom">

            </div>
       </div>
    )
}