export type ArticleMeta = {
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
}

export type ArticleModule = {
    meta: ArticleMeta;
    default: React.FC;
}
