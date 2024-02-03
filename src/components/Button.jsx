import '../App.css';

const Button = (props) => {
    const {handleClick} = props;
    const {category, text} = props;
    return (
        <button type="button" className={`btn ${category} btn-outline-dark`} style={{fontSize: 1.2 + 'vw'}} onClick={() => {
            handleClick(text);
        }}>
            {text}
        </button>
    );
}

export default Button;