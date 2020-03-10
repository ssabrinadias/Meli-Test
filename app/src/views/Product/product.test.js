import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { render, cleanup } from "react-testing-library";
import GET_ITEM from "./schema";
import Product from "./Product";

const mocks = [
	{
		request: {
			query: GET_ITEM,
			variables: {
				id: "MLA835270021"
			}
		},
		result: {
			data: {
				product: {
					item: {
						id: "MLA835270021",
						title: "Samsung Galaxy A50 Dual Sim 128 Gb Negro 4 Gb Ram",
						price: {
							amount: 33.999,
							decimal: 0,
							currency: "ARS"
						},
						picture:
							"http://mla-s1-p.mlstatic.com/709651-MLA31848305203_082019-O.jpg",
						condition: "new",
						free_shipping: null,
						state: null,
						sold_quantity: 1
					},

					autor: {
						name: "Hello",
						lastname: "World"
					}
				}
			}
		}
	}
];

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: "http://localhost:3010/graphql"
});

const component = (
	<MockedProvider mocks={mocks} addTypename={false}>
		<Product />
	</MockedProvider>
);

describe("Product detail request", () => {
	afterEach(cleanup);

	it("[snapshot] - should be able to rende", () => {
		const { container } = render(component);

		expect(container.firstChild).toMatchSnapshot();
	});
});
