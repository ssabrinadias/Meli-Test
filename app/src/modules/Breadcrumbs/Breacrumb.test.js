import React from "react";
import { render} from '@testing-library/react'
import Breadcrumb from ".";

describe("Breadcrumb component", () => {
	it("[snapshot] - should be able to render ", () => {
		const { container } = render(<Breadcrumb />);
		expect(container).toMatchSnapshot();
	});
});
