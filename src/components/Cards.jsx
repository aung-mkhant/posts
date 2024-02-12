import Card from "./Card";
import '../App.css';




const Cards = (props) => {
    const {cards} = props;


    return (
        <div className="cards-container">
            {
                cards.map( (card) =>
                    <Card
                        key={card._id}
                        id={card._id}
                        image={card.image}
                        topic={card.topic}
                        title={card.title}
                        content={card.content}
                    />
                )
            }

        </div>
    );
}

export default Cards;


