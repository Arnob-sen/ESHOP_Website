import React, { Fragment } from "react";

import Header from './component/Header';
import Home from "./component/Home";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import Checkout from "./component/Checkout";

function App() {
  return (
    <BrowserRouter>
  <div className="App">
  
 
  <Routes>
    <Route path="/checkout"
    element={
      <Fragment><Header/><Checkout/></Fragment>}/>

    
  <Route  path='/'
  element={
    <Fragment>
      <Header/>
      <Home />
    </Fragment>}/>
  
   
    
    
  

    
    
  
  
  
  </Routes>

  </div>
  </BrowserRouter>

  );
}

export default App;
