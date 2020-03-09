import gql from 'graphql-tag';

const GET_ITEM = gql`
  query Item($id: String!){
        productDescription(id: $id) {
            description
        }
        product(id: $id){
            autor{
                name,
                lastname
            }
            item{
                id,
                title,
                price{
                    currency,
                    amount,
                    decimals
                },
                picture,
                condition,
                free_shipping,
                sold_quantity
            }
        }
    }
`;

export default GET_ITEM;