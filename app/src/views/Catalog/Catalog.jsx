import React from 'react';
import styled from 'styled-components'
import { theme } from 'styled-tools'
import Structure from "../../modules/Structure"
import Content from "../../components/Content"

const Li =  styled.li `
    background: #FFF;
    list-style: none;
    padding: 16px;
`
const Link = styled.a`
    display: flex;
    color: ${theme('colors.secondary.main')};
`
const Infos = styled.div`
    padding-top: 16px;
    flex-basis: 60%;
`
const Describe = styled.h2`
    font-size: 1em;
`
const Image = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 4px;
    margin-right: 16px;
    img {
        display: block;
        width: 100%;
    }
`
const Local =  styled.span`
    display: block;
    padding-top: 16px;
    font-size: 0.7em;
    flex-basis: 30%;
`
const Price = styled.span`
    display: block;
    margin-bottom: 32px;
    font-size: 1.4em;
`

const Background = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${theme('colors.light.main')};
`

const Catalog = ({queryParams, data}) =>  {  
    console.log(data)
    return (
    <Structure header >
        <Background>
            <Content>
                <ul>
                    <Li>
                        <Link href="">
                            <Image>
                                <img src="https://mla-s1-p.mlstatic.com/609586-MLA31971775656_082019-I.jpg" alt=""/>    
                            </Image>
                            <Infos>
                                <Price>
                                    $ 1.980
                                </Price>
                                <Describe>
                                    <p>Apple Ipod Touch 5g 16gb Negro Igual A Nuevo </p>
                                    <p>Completo Unico!</p>
                                </Describe> 
                            </Infos>
                            <Local>
                                Capital Federal
                            </Local>
                        </Link>
                    </Li>
                </ul>
            </Content>
        </Background>
    </Structure>
  );
}

export default Catalog;