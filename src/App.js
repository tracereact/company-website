import React from 'react';
import './styles/global.css';
// import Welcome from './components/welcome';
import Footer from './components/footer';
import Header from './components/header';
import Sidebar from './components/sidebar';

const App = () => {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default App;
