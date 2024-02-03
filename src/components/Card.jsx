import '../App.css';

const Card = (props) => {
    const {image, position, topic, headline} = props;
    return (
        <div className={`card new ${position} w-75 h-auto`}>
            <img src={`${image}`} alt="" className="card-img-top"/>
            <div className="card-body">
            <p className="card-subtitle text-body-secondary" style={{fontSize: 1.2 + 'vw'}}>{topic}</p>
            <p className="card-title" style={{fontSize: 1.4 + 'vw'}} >{headline}</p>
            </div>
        </div>
    );
}


export default Card;