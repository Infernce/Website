export type ArticleMeta = {
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    date_published: string;
}

export type ArticleModule = {
    meta: ArticleMeta;
    default: React.FC;
}
