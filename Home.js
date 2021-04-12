import React from 'react';
import {Jumbotron, Container ,Button} from 'reactstrap';
import { useEffect, useState } from 'react';

const Home =()=>{

    useEffect(()=>{
        document.title="Home";

    },[])
    return(
       
      <h1></h1>
    );
}

export default Home;