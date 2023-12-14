import { describe, test, expect } from "@jest/globals"; 
import { render, screen } from "@testing-library/react";
import Record from "../../pages/main/records";

describe("Record testing", () => {

	test("Record should render correctly", () => {
		render(<Record />);
	});

	test("Record should have navbar", () => {
		render(<Record />);
		const navbar = screen.queryByTestId("navbar");
		expect(navbar).toBeInTheDocument();
	});
});
