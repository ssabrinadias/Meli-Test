import React from 'react';
import Content from "../../components/Content"
import styled from 'styled-components';
import { theme } from 'styled-tools'


const Ul = styled.ul`
  margin: 16px 0;
  list-style: none;
  font-size: 0.7em;
  color: ${theme('colors.tertiary.main')};
  li {
    position: relative;
    display: inline-block;
    padding-right: 20px;
    &:before {
      content: ">";
      position: absolute;
      display: block;
      right: 5px;
    }
  }
  li:last-child {
    &:before {
      content: ""
    }
  }
`

const Breadcrumb = ({categories}) =>  {  
  return (
      <Content>
        <Ul>
            {categories && categories.map((categorie)=><li key={categorie}>{categorie}</li>)}
        </Ul>
      </Content>
  );
}

export default Breadcrumb;