import '../CSS/App.css';
import {Routes, Route} from 'react-router-dom';
import Search from './Search';
import Gif from './Gif';
import Favorite from './Favorite';
import Heart from './Heart';


function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Search />} component={<Search/>}/>
          <Route path="/gif" element={<Gif />} component={<Gif/>}/>
          <Route path="/fav" element={<Favorite />} component={<Favorite/>}/>
          <Route path="/heart" element={<Heart />} component={<Heart/>}/>
      </Routes>
    </>
  );
}

export default App;
