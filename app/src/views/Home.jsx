import React from 'react';
import Structure from "./Structure"
import styled from 'styled-components'


const Content = styled.div`
  background: red
`

const Home = () =>  {  
  return (
    <Structure
      header
    >
      <Content>aqui</Content>
    </Structure>
  );
}

export default Home;