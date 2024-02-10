import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Search } from './Component/Search';
import ItemPage from './Component/ItemPage';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route exact path="/" element={<Search />} />
          <Route exact path="/item/:id" element={<ItemPage />} />
        </Routes>
      </Router>

    </div>
  );
};

export default App;
