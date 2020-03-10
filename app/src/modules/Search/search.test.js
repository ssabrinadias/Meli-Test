import React from "react";
import { render } from "@testing-library/react";
import Search from ".";

describe("Search component", () => {
	it("[snapshot] - should be able to render ", () => {
		const { container } = render(<Search />);
		expect(container).toMatchSnapshot();
	});
});
