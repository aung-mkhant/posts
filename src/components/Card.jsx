import '../App.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { id, image, topic, title, content } = props;

    return (
        <div className={`card border-0 h-auto`}>
            <img src={`${image}`} alt="" className="card-img-top img-fluid "/>
            <div className="card-body">
                <div className="card-subtitle text-body-secondary" style={{ fontSize: 14 }}>{topic}</div>
                <Link to={`/posts/${id}`} state= {{
                    image: image,
                    topic: topic,
                    title: title,
                    content: content
                }}>
                    <div className="card-title" style={{ fontSize: '1.25rem' }}>{title}</div>
                </Link>
            </div>
        </div>
    );
}

export default Card;
