import type { ArticleMeta, ArticleModule } from "../../Components/ArticleModule";
import thumbnail from "./thumbnail.jpg"

export const meta: ArticleMeta = {
    slug: "template",
    title: "TEMPLATE TITLE",
    description: "TEMPLATE DESCRIPTION",
    thumbnail,
    date_published: "3000/12/12"
}

export const module: ArticleModule = {
    meta,
    default: ArticleTemplate
};

export default function ArticleTemplate() {
    return (
        <h1>ARTICLE TEMPLATE</h1>
    );
}