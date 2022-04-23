import './App.css';
import {useState, useEffect} from 'react';

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
    const data = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=J50GUocJ7bqHKPv807g9I10AydOK1DX1`);
    const gifs = await data.json();
    console.log(gifs);
    setGifs(gifs.data.map(data => <img className='gifs' src={data.images.original.url}></img>));
    setTerm(`The current search is for: ${searchInput}`);
    setSearchInput("");
  }

  useEffect((event)=>{
    fetchGifs(event);
  }, []);

   

  return (
    
   <>

   <h1 className='gifsongifs'>Gifs on Gifs</h1>
   <form className='searchField' onSubmit={fetchGifs}>
   <input className='input-fld' onChange={updateSearch} placeholder="Search for gif..." type="text" value={searchInput}/>
   <button>Search</button>
   </form>

   <h3 className='userSearchTerm'>{term}</h3>
   <div className='gifContainer'>
   {gifsList}
   </div>
    
   </>
  );
}

export default App;
