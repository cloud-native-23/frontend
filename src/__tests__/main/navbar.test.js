import { describe, test, expect } from "@jest/globals"; 
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "../../pages/main/_components/navbar";

describe("NavBar testing", () => {

	test("i18n translation should work", () => {
		render(<NavBar />);
		const button = screen.queryByTestId("lang");
		const home = screen.queryByTestId("home");
		fireEvent.click(button);
		expect(home).toHaveTextContent("首頁");
	});
});
