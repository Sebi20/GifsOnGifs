import '../CSS/App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'
import {Link, useLocation, useNavigate} from 'react-router-dom';

function Search() {
  
  const [gifsList, setGifs] = useState(JSON.parse(sessionStorage.getItem("gifs")) || []);
  const [searchInput, setSearchInput] = useState("");
  const [term, setTerm] = useState(sessionStorage.getItem("term"));
  let input = document.getElementsByClassName("input-fld");

  // This function sets the new search input when a user types in the input field
  function updateSearch(event){
    event.preventDefault();
    setSearchInput(event.target.value);
  }
  
  // This function fetches the api with the search input added(for specific searching)
  // Adds the new gfs to the session storage and sets the new gifs to the gifsList
  const fetchGifs = async (event) =>{
    if(searchInput == ""){
      return;
    }

    setGifs([]);
    event.preventDefault();

    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=J50GUocJ7bqHKPv807g9I10AydOK1DX1`);
    
    sessionStorage.setItem("gifs", JSON.stringify(res.data.data));
    
    setGifs(res.data.data);
    setTerm(searchInput);
    setSearchInput("");
  }// End of the fetchGifs function

  useEffect((event)=>{
    fetchGifs(event);
  }, []);

  //Setting the term in session storage to be the new term that was just searched
  sessionStorage.setItem("term", term);

  const gifs = gifsList.map(gifs =>{

    return (
      <div className='eachGifContent'>

       <Link to= {'/gif'} state={{
           img: gifs.images.original.url,
           title: gifs.title,
           rating: gifs.rating
       }}><img className='gifs' src={gifs.images.original.url}></img></Link>

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
    <Link className='favPageLink' to={'/fav'}><h4>Favorite's page→</h4></Link>

    <h3 className='userSearchTerm'>The current search is for: <span className='searchTerm'>{term}</span></h3>
    <div className='gifContainer'>
    {gifs}
    </div>
    
   </>
  );
}

export default Search;