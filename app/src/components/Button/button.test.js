import React from "react";
import { render } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
	it("[snapshot] - should be able to render ", () => {
		const { container } = render(<Button />);
		expect(container).toMatchSnapshot();
	});
});
