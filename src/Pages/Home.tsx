import { GetArticleBoxData } from "../ArticleRegistry";

export default function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <h1>HOME</h1>
            {GetArticleBoxData()}
        </div>
    );
}