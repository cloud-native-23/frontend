import { describe, test, expect } from "@jest/globals"; 
import { render, screen } from "@testing-library/react";
import Index from "../../pages/main/index";

describe("Index testing", () => {

	test("Index should render correctly", () => {
		render(<Index />);
	});

	test("Index should have navbar", () => {
		render(<Index />);
		const navbar = screen.queryByTestId("navbar");
		expect(navbar).toBeInTheDocument();
	});
});
