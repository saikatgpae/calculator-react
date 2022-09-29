import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Calculator from './components/Calculator';
import './App.css';
import Home from './routers/Home';
import Navbar from './components/Navbar';
import Quote from './routers/Quote';
import Mathmagician from './routers/Mathmagician';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Mathmagician />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
        {/* <Calculator /> */}
      </div>
    );
  }
}

export default App;
