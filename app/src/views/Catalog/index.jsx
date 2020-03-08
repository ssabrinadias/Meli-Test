import React from 'react';
import {useLocation} from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import CatalogView from "./Catalog"
import GET_CATALOG from "./schema"

const getQueryParams = () => {
    return new URLSearchParams(useLocation().search)
}

const Catalog = () => {
    const { loading, error, data } = useQuery(GET_CATALOG, {
      variables: { q: 'iphone' },
    });
    const queryParams = getQueryParams()
    const search = queryParams.get('search')
    return <CatalogView 
        queryParams={search}
        data={data}
    />
}

export default Catalog;