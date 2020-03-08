import React from 'react';
import styled from 'styled-components'
import Structure from "../../modules/Structure"
import Content from "../../components/Content"
import Item from "../../modules/CatalogItem"

const Li =  styled.li `
    background: #FFF;
    list-style: none;
    padding: 16px;
`

const CatalogView = ({queryParams, data}) =>  {  
    return (
    <Structure header >
        <Content>
            <ul>
                {data && (data.catalog||{}).items
                    .map((item, id )=>
                        <Li key={item.id}>
                            <Item item={item}/>
                        </Li>
                    )
                }
            </ul>
        </Content>
    </Structure>
  );
}

export default CatalogView;