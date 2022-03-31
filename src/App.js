import './App.css';
import {useState} from 'react';

function App() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [url, setUrl] = useState("");

  //API call
  //https://api.giphy.com/v1/gifs/search?q=zain&api_key=J50GUocJ7bqHKPv807g9I10AydOK1DX1
  
  function fetchGifs(event){
    event.preventDefault();
    fetch("https://api.giphy.com/v1/gifs/search?q=cars&api_key=J50GUocJ7bqHKPv807g9I10AydOK1DX1")
    .then(response => response.json())
    .then(data => setData(data.data));
  }

  return (
    
   <>

   <h1>Gifs on Gifs</h1>
   <form onSubmit={fetchGifs}>
   <input type="text"/>
   </form>
   </>
  );
}

export default App;
