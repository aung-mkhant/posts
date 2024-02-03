import Button from "./Button";


const Tags = (props) => {
    const {handleClick} = props;
    return (
        <div className="mb-3">
            <h2 className="mb-3" style={{fontSize: 2.3 + 'vw'}} >Tags</h2>
                <Button category="all" text="All" handleClick={handleClick}/>
                <Button category="health" text="Health" handleClick={handleClick}/>
                <Button category="lifestyle" text="Lifestyle" handleClick={handleClick}/>
                <Button category="fashion" text="Fashion" handleClick={handleClick}/>
                <Button category="technology" text="Technology" handleClick={handleClick}/>
                <Button category="personal" text="Personal" handleClick={handleClick}/>
                <Button category="business" text="Business" handleClick={handleClick}/>
        </div>
    );
}


export default Tags;