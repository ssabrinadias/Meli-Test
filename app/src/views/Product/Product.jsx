import React from 'react';
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { Helmet } from 'react-helmet'
import Language from "../../components/language" // check location consistency for dynamic return
import Structure from "../../modules/Structure"
import Content from "../../components/Content"
import Button from "../../components/Button"


const BoxDetail =  styled.div`
    display: flex;
    background: #FFF;
`
const Detail = styled.div`
    flex-basis: 30%;
    margin-top: 32px;
    padding-right: 32px;
    font-size: 0.7em;
    h1 {
        line-height: 1.3em;
        margin-top: 16px;
        font-size: 1.4em;
    }
`
const Image = styled.div`
    flex-basis: 60%;
    max-width: 680px;
    padding-right: 16px;
    padding-top: 32px;
    img {
        display: block;
        margin: auto;
    }
`
const Price = styled.div`
    display: flex;
    margin: 32px 0;
    font-size: 2.5em;
`
const Decimal = styled.div`
    position: relative;
    top: 6px;
    left: 3px;
    font-size: 0.5em;
`

const Description = styled.div`
    padding: 32px 0 32px 32px;
    background: #FFF;
    h2 {
        margin-bottom: 32px;
        font-size: 1.5em;
    }
    p {
        font-size: 0.9em;
        color: ${theme('colors.tertiary.main')};
    }
`

const disruptResult = ({
    productDescription,
    product,
    product:{
        item:{
            id,
            title,
            condition,
            picture,
            price,
            sold_quantity,
            free_shipping
        }
    }
}) => ({
    id,
    title,
    condition:  condition==="new"? Language.ARS.new: '',
    picture,
    price,
    product,
    productDescription,
    sold_quantity,
    free_shipping
})

const ProductView = ({data}) =>  { 
    const product = data ? disruptResult(data) : {}
    const amount = (product.price||{}).amount
    const decimal = (product.price||{}).decimal
    const title = product.title || ""
    const description = (product.productDescription||{}).description || ""
 
    const decimalDisplay = (decimal)=> {
        const decimalLength = String(decimal).length
        if (decimalLength <=1 ) return `${decimal}0`
        return Decimal
    }
    
    return (
    <Structure header >
        <Helmet>
            <title>{title} Mercado Libre</title>
            <meta name="description" content={description} />
        </Helmet>

        <Content>
            <BoxDetail>
                <Image>
                    <img src={product.picture} alt={title}/>
                </Image>
                <Detail>
                    <span>{product.condition || Language.ARS.used} - {product.sold_quantity} {Language.ARS.sold}</span>
                    <h1>{title}</h1>
                    <Price>
                        <span>{Language.currency.ARS} {amount && amount.toFixed(3)}</span>
                        <Decimal>{(decimal===0 || decimal) && decimalDisplay(decimal)}</Decimal>
                    </Price>
                    <Button 
                        onClick={()=>{}}
                        primary
                        fluid
                    >
                        {Language.ARS.button.buy}
                    </Button>
                </Detail>
            </BoxDetail>
            <Description>
                <h2>
                    {Language.ARS.description}
                </h2>
                <p>{description}</p>
            </Description>
        </Content>
    </Structure>
  );
}

export default ProductView;