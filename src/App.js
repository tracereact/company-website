import React from 'react';
import './styles/global.css';
// import Welcome from './components/welcome';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Content from './components/content';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
