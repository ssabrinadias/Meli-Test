import React from 'react';
import {useLocation} from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import CatalogView from "./Catalog"
import GET_CATALOG from "./schema"

const getQueryParams = () => {
    return new URLSearchParams(useLocation().search)
}

const Catalog = () => {
    const queryParams = getQueryParams()
    const search = queryParams.get('search')
    const { loading, error, data } = useQuery(GET_CATALOG, {
      variables: { q: search },
    });
    return <CatalogView 
        queryParams={search}
        data={data}
        error={error}
    />
}

export default Catalog;