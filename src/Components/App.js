import '../CSS/App.css';
import {Routes, Route} from 'react-router-dom';
import Search from './Search';
import GifDisplay from './GifDisplay';
import Gif from './Gif';
import Favorite from './Favorite';
import Heart from './Heart';


function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Search />} component={<Search/>}/>
          <Route path="/gifdisplay" element={<GifDisplay />} component={<GifDisplay/>}/>
          <Route path="/fav" element={<Favorite />} component={<Favorite/>}/>
          <Route path="/heart" element={<Heart />} component={<Heart/>}/>
          <Route path="/gif" element={<Gif />} component={<Gif/>}/>
      </Routes>
    </>
  );
}

export default App;
