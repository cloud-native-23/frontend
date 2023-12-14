import { describe, test, expect } from "@jest/globals"; 
import { render, screen } from "@testing-library/react";
import NewVenue from "../../pages/admin/newVenue";

describe("NewVenue testing", () => {

	test("NewVenue should render correctly", () => {
		render(<NewVenue />);
	});

	test("NewVenue should have navbar", () => {
		render(<NewVenue />);
		const navbar = screen.queryByTestId("navbar");
		expect(navbar).toBeInTheDocument();
	});
});
