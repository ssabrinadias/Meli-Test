import React from 'react';
import Structure from "../../modules/Structure"
import { Helmet } from 'react-helmet'


const Home = () =>  {  
  return (
    <Structure
      header
    >
      <Helmet>
        <title>Mercado Libre</title>>
      </Helmet>
    </Structure>
  );
}

export default Home;