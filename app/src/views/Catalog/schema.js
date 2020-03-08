import gql from 'graphql-tag';

const GET_CATALOG = gql`
  query Catalog($q: String!){
      catalog(q: $q) {
        autor{
        name,
        lastname
        },
        items {
        id,
        title,   
        price {
            amount,
            decimals,
            currency
        },
        picture,
        condition,
        free_shipping
        },
        categories
      }
    }
`;

export default GET_CATALOG;