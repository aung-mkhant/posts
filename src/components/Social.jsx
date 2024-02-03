import '../App.css';

const Social = (props) => {
    const {text, service, link}  = props;
    return (
        <button className={`btn-${service} px-3`}>
      <span className="btn-gradient">
        <i className={`fa fa-${service}`}  style={{fontSize: 2 + 'vw'}}></i>
      </span>
            <span className="btn-text" style={{fontSize: 1.7 + 'vw'}}>{service}</span>
        </button>
    );
}

// <div>
//     <a className={`btn ${service}`} href={`${link}`}>
//         {text}
//         <p>Follow me</p>
//         </a>
// </div>


export default Social;