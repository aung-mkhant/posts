import Card from "./Card";
import '../App.css';



const Cards = (props) => {
    const {cards} = props;




    return (
        <div className="cards-container">
            {
                cards.map( (card,index) =>
                    <Card
                        key={card._id}
                        position={index % 2 === 0 ? 'ms-auto' : 'me-auto'}
                        image="/images/fruits.jpg"
                        topic={card.topic}
                        headline={card.title}
                    />
                )
            }

        </div>
    );
}

export default Cards;




// <div className="cards-container">
//     <Card position="left" image="fruits.jpg" topic="Health" headline="30 Healthiest Fruits and Their Benefits, According to Experts"/>
//     <Card position="right" image="jordans.jpg.webp" topic="Lifestyle" headline="The Most Expensive Air Jordans: A Sneakerhead's Dream List"/>
//     <Card position="left" image="jojogucci.jpg" topic="Fashion" headline="How Jojo's Bizarre Adventure got me to appreciate Gucci's aesthetic"/>
//     <Card position="right" image="samsung.jpg" topic="Technology" headline="Samsung to embed Google's generative AI tech in S24 smartphone series"/>
// </div>