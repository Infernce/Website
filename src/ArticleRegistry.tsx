import { Route } from "react-router-dom";
import type { ArticleModule } from "./Components/ArticleModule";
import ArticleBox from "./Components/ArticleBox";

const articles = import.meta.glob<ArticleModule>(
  "./Articles/**/index.tsx",
  { eager: true }
);

export default function GetArticleRoutes() {
  return Object.values(articles).map((article) => {
    const Component = article.default;

    return (
      <Route
        key={article.meta.slug}
        path={`/articles/${article.meta.slug}`}
        element={<Component />}
      />
    );
  });
}

export function GetArticleBoxData() {
  return Object.values(articles).map((article) => {

    return (
      <ArticleBox link={`/articles/${article.meta.slug}`} title={article.meta.title} description={article.meta.description} thumbnail={article.meta.thumbnail}/>
    )
  })
}