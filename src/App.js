import './App.css';
import {useState} from 'react';

function App() {
  const [gifsList, setGifs] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function updateSearch(event){
    setSearchInput(event.target.value);
  }
  
  function fetchGifs(event){
    setGifs([]);
    event.preventDefault();
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=J50GUocJ7bqHKPv807g9I10AydOK1DX1`)
    .then(response => response.json())
    .then(data => setGifs(data.data.map(data => <img className='gifs' src={data.images.original.url}></img>)));

    
  }// End of the fetchGifs function

  return (
    
   <>

   <h1>Gifs on Gifs</h1>
   <form onSubmit={fetchGifs}>
   <input onChange={updateSearch} type="text"/>
   <button>Search</button>
   </form>
    {gifsList}
   </>
  );
}

export default App;
