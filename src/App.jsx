import './App.css';
import Cards from "./components/Cards";
import Tags from "./components/Tags";
import {useState,useEffect} from "react";
import axios from "axios";
import Socials from "./components/Socials";

function App() {



    const [cards,setCards] = useState([]);
    const [filter, setFilter] = useState('All');



    const fetchData = () =>  {
        const uri = `/posts/${filter}/`;
        return axios.get(uri)
            .then(result =>  setCards(result.data ))
            .catch(err => console.log(err))
    }

    const changeFilter = (filterValue) => {
        setFilter(filterValue);
    }



    useEffect(() => {
        console.log("this is run")
        fetchData();
    },[filter])



  return (
      <>
      <section id="top">

          <nav className="navbar navbar-expand-lg bg-white">
              <div className="container-fluid">
                  <a className="navbar-brand fs-1" href="#">Navbar</a>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                          aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav ms-auto">
                          <a className="nav-link active fs-5" aria-current="page" href="#">Home</a>
                          <a className="nav-link fs-5" href="#">Blog</a>
                          <a className="nav-link fs-5" href="#">About</a>
                          <a className="nav-link fs-5" href="#">Contact</a>
                      </div>
                  </div>
              </div>
          </nav>
      </section>



      <section id="middle" className="py-5">
          <Cards cards={cards} getData={fetchData}  />

          <div className="right">
              <Tags handleClick={changeFilter}/>
              <Socials />
          </div>


      </section>



          <section id="bottom">

                  <div className="end-text">Dear traveller, you have reached the end. Come again next time for new content.</div>

          </section>

      </>
  );
}

export default App;
