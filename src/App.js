import './App.css';
import {Routes, Route} from 'react-router-dom';
import Search from './Search';
import Gif from './Gif'

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Search />} component={<Search/>}/>
          <Route path="/gif" element={<Gif />} component={<Gif/>}/>
      </Routes>
    </>
  );
}

export default App;
