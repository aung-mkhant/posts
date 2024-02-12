import './App.css';
import Cards from "./components/Cards";
import {useState,useEffect,useRef} from "react";
import axios from "axios";
import {Route, Routes, useNavigate} from "react-router-dom";
import Post from "./components/Post";

function App() {


    const [cards,setCards] = useState([]);
    const navigate = useNavigate();


    const navButton = useRef(null);
    const linksContainerRef= useRef(null);

    let collapseNav = () => {
        navButton.current.classList.add('collapsed');
        linksContainerRef.current.classList.remove('show');
    }



    const fetchData = (filterValue='All') =>  {
        const uri = `https://amkblog.onrender.com/posts/${filterValue}/`;
        axios.get(uri)
            .then(result =>  setCards(result.data))
            .catch(err => console.log('Error while fetching data',err))
    }

    const handleClick = (newFilter) => {
        collapseNav();
        fetchData(newFilter);
        navigate('/posts');
    }


    useEffect(() => {
        fetchData();
    },[])



  return (
      <>
      <section id="top">

          <nav className="navbar navbar-expand-lg bg-white">
              <div className="container-fluid">
                  <a className="navbar-brand fs-2" href="/posts">HATESEARTHLINGS</a>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" ref={navButton}
                          data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                          aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup" ref={linksContainerRef}>
                      <div className="navbar-nav ms-auto">
                          <button className="nav-link fs-5 tags"  onClick={() => {handleClick('All')}} >All</button>
                          <button className="nav-link fs-5 tags"  onClick={() => handleClick('Health')}>Health</button>
                          <button className="nav-link fs-5 tags"  onClick={() => handleClick('Fashion')}  >Fashion</button>
                          <button className="nav-link fs-5 tags"  onClick={() => handleClick('Lifestyle')}  >Lifestyle</button>
                          <button className="nav-link fs-5 tags"  onClick={() => handleClick('Technology')} >Technology</button>
                      </div>
                  </div>
              </div>
          </nav>
      </section>



      <section id="middle" className="">

          <Routes>

              <Route path='/posts'>

                  <Route index element={<Cards cards={cards} />}/>

                  <Route path=':id' element={<Post />}/>
              </Route>


          </Routes>
      </section>




          <section id="bottom" className="py-5">

              <div className="container text-center">
              <div className="fs-4 bottom-text">Have ideas? Come join us!</div>
              <div className="fs-1 brand">HATESEARTHLINGS&trade;</div>
              </div>
          </section>



      </>
  );
}

export default App;
