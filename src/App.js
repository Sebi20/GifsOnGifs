import './App.css';
import {Routes, Route} from 'react-router-dom';
import Search from './Search';
import Gif from './Gif'
import Favorite from './Favorite'


function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Search />} component={<Search/>}/>
          <Route path="/gif" element={<Gif />} component={<Gif/>}/>
          <Route path="/fav" element={<Favorite />} component={<Favorite/>}/>
      </Routes>
    </>
  );
}

export default App;
