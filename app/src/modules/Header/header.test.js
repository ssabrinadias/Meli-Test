import React from "react";
import { render } from "@testing-library/react";
import Header from ".";

describe("Header component", () => {
	it("[snapshot] - should be able to render ", () => {
		const { container } = render(<Header />);
		expect(container).toMatchSnapshot();
	});
});
