import { type ArticleMeta, type ArticleModule } from "../../Components/ArticleModule";
import '../../Components/Article.css'
import thumbnail from "./thumbnail.jpg"
import { ArticleHeader } from "../../Components/ArticleSnippets";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import markdown from './June-13-2026/June-13-2026.md?raw'

export const meta: ArticleMeta = {
    slug: "June-13-2026",
    title: "June 13, 2026",
    description: "Before my whole life changes as I prepare to enter college, I thought to write a post about what I was doing on June 13, 2026, as a memory for my future self.",
    thumbnail
}

export const module: ArticleModule = {
    meta,
    default: June_13_2026
};

export default function June_13_2026() {
    return (
        <div>
            {ArticleHeader(module)}
            <br/>
            <br/>
            <br/>
            <div className="Article">
                <div style={{whiteSpace: "pre-wrap",
                    textAlign: "left"
                }}>
                    <Markdown remarkPlugins={[remarkGfm]}>
                        {markdown}
                    </Markdown>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
}