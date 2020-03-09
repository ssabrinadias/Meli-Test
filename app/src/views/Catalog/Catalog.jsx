import React from 'react';
import styled from 'styled-components'
import Structure from "../../modules/Structure"
import Content from "../../components/Content"
import Item from "../../modules/CatalogItem"

const Ul =  styled.ul `
    margin-top: 0;
`

const Li =  styled.li `
    background: #FFF;
    list-style: none;
    padding: 16px;
    color: 
`
const NotFound = styled.div`
    background: #FFF;
    padding: 32px;
    margin-bottom: 32px;
`


const CatalogView = ({data, error}) =>  {  
    const items = data && (data.catalog||{}).items
    return (
    <Structure
        header
        breadcrumb ={data && (data.catalog||{}).categories}
    >
        <Content>
            {items ? 
                <Ul>
                    {items.map((item, id )=>
                            <Li key={item.id}>
                                <Item item={item}/>
                            </Li>
                        )
                    }
                </Ul>
                :
                data && <NotFound>No hay publicaciones que coincidan con tu búsqueda.</NotFound>
            }
        </Content>
    </Structure>
  );
}

export default CatalogView;