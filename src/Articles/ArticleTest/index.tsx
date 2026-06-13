import type { ArticleMeta, ArticleModule } from "../../Components/ArticleModule";
import ArticleTest from "./ArticleTest";
import thumbnail from "./thumbnail.jpg"

export const meta: ArticleMeta = {
    slug: "test",
    title: "Test Article",
    description: "This is a test article for testing purposes.",
    thumbnail
}

export const module: ArticleModule = {
    meta,
    default: ArticleTestOut
};

export default function ArticleTestOut() {
    return (
        <ArticleTest/>
    );
}

