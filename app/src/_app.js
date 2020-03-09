import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();

const client = new ApolloClient({
	link: ApolloLink.from([
		createHttpLink({
			uri: "http://localhost:3010/graphql",
			useGETForQueries: true,
			credentials: "same-origin",
			mode: "no-cors",
			headers: {
				"Access-Control-Allow-Origin": "http://localhost:3010/graphql",
				"Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
				"Access-Control-Allow-Headers": "application/json"
			}
		})
	]),
	fetchOptions: {
		mode: "no-cors"
	},
	cache
});

export default Content =>
	ReactDOM.render(
		<ApolloProvider client={client}>
			<Content />
		</ApolloProvider>,
		document.getElementById("root")
	);
