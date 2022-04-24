import './App.css';
import {Routes, Route} from 'react-router-dom';
import Search from './Search';
import Gif from './Gif'

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Search />}/>
        <Route path="/gif" element={<Gif />}/>
      </Routes>
    </>
  );
}

export default App;
