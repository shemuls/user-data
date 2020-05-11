import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Allusers from './components/Allusers/Allusers';


function App() {
  return (
    <div className="">
      <Header></Header>

        <Allusers></Allusers>

      <Footer></Footer>
    </div>
  );
}

export default App;
