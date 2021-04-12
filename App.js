import React from "react";
import './App.css';
import { Button, Col, Row } from 'reactstrap';
import Menus from './components/Menus';
import {BrowserRouter as Router, Route} from'react-router-dom';
import AddFeedback from './components/AddFeedback';
import ViewFeedback from './components/ViewFeedback';
import Header from './components/Header'
import Home from "./components/Home";
import { UpdateFeedback } from "./components/UpdateFeedback";
import FooterComponent from "./components/FooterComponent";
import Navbar from "./components/Navbar"
function App() {
  return (
    <div className="App">
         <Header/>
         <Router>
       <Navbar/>
         <switch>
         <Row>
           <  Col md={3}>
         <Menus/> 
           </Col>
           <Col md={9}>
           <Route path="/" component={Home} exact/>
           <Route path="/add-feedback" component={AddFeedback} exact/>
           <Route path="/update-feedback/:id" component={UpdateFeedback} exact/>
           <Route path="/view-feedback" component={ViewFeedback} exact/>
           </Col>
         </Row>
         </switch>
         </Router>
         <FooterComponent/>
         </div>
  );
}
export default App;
