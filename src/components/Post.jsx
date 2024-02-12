import { useLocation } from 'react-router-dom';
import './Post.css';


const Post = () => {
    const {state} = useLocation();

    return <div className="article">



        <p className="text-center topic my-2">{state.topic}</p>
        <p className="text-center fs-1 title my-2">{state.title}</p>


        <div className="main-content py-4">


            <div>
                <img src={`${state.image}`} className="w-100" alt=""/>
                <div className="postContent px-3">
        <p className="content my-5">{state.content}</p>
                </div>
            </div>

            <div className="sidebar">
                <div>hello world</div>
            </div>
        </div>

    </div>
}

export default Post;