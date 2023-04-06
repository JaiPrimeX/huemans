import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './home';
import Search from './search'
import About from './pages/about';
import Profile from './pages/profile';
import Favorites from './pages/favorites';
import Businesses from './pages/businesses';

function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/businesses' element={<Businesses/>}/>
    </Routes>
    </Router>
);
}
  
export default App;