import { Link } from 'react-router-dom';
import './ArticleBox.css';

 type Props = {
        link: string;
        thumbnail: string;
        title: string;
        description: string;
    }

export default function ArticleBox({ link, thumbnail, title, description }: Props) {
    
    return (
        <Link className="ArticleLink" to={link}>
            <div className="ArticleBoxBackground">
                <img className="Thumbnail" src={thumbnail} alt="Thumbnail" />

                <div className="ThumbnailText">
                    <h2 className="ThumbnailTitle">{title}</h2>
                    <p className="ThumbnailDescription">{description}</p>
                </div>
            </div>
        </Link>
    );
}
