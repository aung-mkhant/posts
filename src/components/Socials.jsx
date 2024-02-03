import Social from "./Social";


const Socials = (props) => {
    return (
        <div className="mt-3">
            <h2 className="mb-3" style={{fontSize: 2.3 + 'vw'}}>Socials</h2>

                <Social text="Facebook" service="facebook"/>
                <Social text="Instagram" service="instagram"/>
                <Social text="Github" service="github"/>

        </div>
    );
}


export default Socials;