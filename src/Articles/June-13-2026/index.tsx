import type { ArticleMeta, ArticleModule } from "../../Components/ArticleModule";
import '../../Components/Article.css'
import thumbnail from "./thumbnail.jpg"

import markdown from './June-13-2026.md?raw'

export const meta: ArticleMeta = {
    slug: "June-13-2026",
    title: "June 13, 2026",
    description: "Before my whole life changes as I prepare to enter college, I thought to write a post about what I was doing on June 13, 2026, as a memory for my future self.",
    thumbnail
}

export const module: ArticleModule = {
    meta,
    default: ArticleTemplate
};

export default function ArticleTemplate() {
    return (
        <div className="ArticleBorder">
            <div style={{whiteSpace: "pre-wrap"}}>
                {markdown}
            </div>
        </div>
    );
}