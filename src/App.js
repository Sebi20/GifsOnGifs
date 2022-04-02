import './App.css';
import {useState} from 'react';

function App() {
  const [gifsList, setGifs] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let input = document.getElementsByClassName("input-fld");

  function updateSearch(event){
    setSearchInput(event.target.value);
  }
  
  function fetchGifs(event){
    setGifs([]);
    event.preventDefault();
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=J50GUocJ7bqHKPv807g9I10AydOK1DX1`)
    .then(response => response.json())
    .then(data => setGifs(data.data.map(data => <img className='gifs' src={data.images.original.url}></img>)));
    setSearchInput("");
    
  }// End of the fetchGifs function

  return (
    
   <>

   <h1 className='gifsongifs'>Gifs on Gifs</h1>
   <form className='searchField' onSubmit={fetchGifs}>
   <input className='input-fld' onChange={updateSearch} type="text" value={searchInput}/>
   <button>Search</button>
   </form>
   <div className='gifContainer'>
   {gifsList}
   </div>
    
   </>
  );
}

export default App;
