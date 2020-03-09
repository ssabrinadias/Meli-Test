import React from 'react';
import {useParams} from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import ProductView from "./Product"
import GET_ITEM from "./schema"

const Product = () => {    
    const { id } = useParams()
    const { loading, error, data } = useQuery(GET_ITEM, {
      variables: { id: id },
    });
    return <ProductView
        id={id}
        data={data}
    />
}

export default Product;