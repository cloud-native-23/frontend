import { describe, jest, test, expect } from "@jest/globals"; 
import { render, screen } from "@testing-library/react";
import EditVenue from "../../pages/admin/editVenue";

describe("EditVenue testing", () => {

	test("EditVenue should render correctly", () => {
		render(<EditVenue />);
	});

	test("EditVenue should have navbar", () => {
		jest.spyOn(URLSearchParams.prototype, "get").mockReturnValue({ query: {venue: 1} });
		render(<EditVenue />);
		const navbar = screen.queryByTestId("navbar");
		expect(navbar).toBeInTheDocument();
	});
});
