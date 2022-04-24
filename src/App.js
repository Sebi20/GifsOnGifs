import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  const [gifsList, setGifs] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [term, setTerm] = useState("");
  let input = document.getElementsByClassName("input-fld");

  function updateSearch(event){
    event.preventDefault();
    setSearchInput(event.target.value);
  }
  

  const fetchGifs = async (event) =>{
    setGifs([]);
    event.preventDefault();

    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=J50GUocJ7bqHKPv807g9I10AydOK1DX1`);
    console.log(res.data.data);
    setGifs(res.data.data);
    setTerm(searchInput); 
    setSearchInput("");
  }

  useEffect((event)=>{
    fetchGifs(event);
  }, []);

  const gifs = gifsList.map(gifs =>{

    return (
      <div>
        <img className='gifs' src={gifs.images.original.url}></img>

      </div>
    )

  })



  return (
    
   <>
    <h1 className='gifsongifs'>Gifs on Gifs</h1>
    <form className='searchField' onSubmit={fetchGifs}>
      <input className='input-fld' onChange={updateSearch} placeholder="Search for gif..." type="text" value={searchInput}/>
      <button>Search</button>

    </form>

    <h3 className='userSearchTerm'>The current search is for: <span className='searchTerm'>{term}</span></h3>
    <div className='gifContainer'>
    {gifs}
    </div>
    
   </>
  );
}

export default App;
