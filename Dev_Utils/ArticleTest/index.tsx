import type { ArticleMeta, ArticleModule } from "../../Components/ArticleModule";
import thumbnail from "./thumbnail.jpg"

const meta: ArticleMeta = {
    slug: "template",
    title: "TEMPLATE TITLE",
    description: "TEMPLATE DESCRIPTION",
    thumbnail
}

export const module: ArticleModule = {
    meta,
    default: ArticleTestOut
};

export default function ArticleTestOut() {
    return (
        <h1>ARTICLE TEMPLATE</h1>
    );
}

