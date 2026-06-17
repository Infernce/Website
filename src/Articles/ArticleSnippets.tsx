import { type ArticleMeta } from "./ArticleModule"
import './ArticleSnippets.css'

export function ArticleHeader(articleMeta: ArticleMeta) {
    return (
       <div>
            <div className="articleHeaderTitle">
                <h1>{articleMeta.title}</h1>
            </div>
            <div className="articleHeaderBottom">
                <p className="articleHeaderInfoText">Date Published: {articleMeta.date_published}</p>
            </div>
       </div>
    )
}