import gql from "graphql-tag";

const GET_CATALOG = gql`
	query Catalog($q: String!) {
		catalog(q: $q) {
			autor {
				name
				lastname
			}
			items {
				id
				title
				price {
					amount
					decimal
					currency
				}
				picture
				condition
				free_shipping
				state {
					name
				}
			}
			categories
		}
	}
`;

export default GET_CATALOG;
