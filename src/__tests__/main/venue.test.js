import { describe, jest, test, expect } from "@jest/globals"; 
import { render, screen } from "@testing-library/react";
import getConfig from "next/config";
import axios from "axios";
import Venue from "../../pages/main/venue";

describe("Venue testing", () => {

	test("Venue should render correctly", () => {
		render(<Venue />);
	});

	test("Venue should have navbar", () => {
		jest.spyOn(URLSearchParams.prototype, "get").mockReturnValue({ query: {venue: 1} });
		render(<Venue />);
		const navbar = screen.queryByTestId("navbar");
		expect(navbar).toBeInTheDocument();
	});

	test("When fetchVenueInfo API is successful", async () => {
		jest.mock("axios");
		const mock = jest.spyOn(axios, "post");

		const {
			publicRuntimeConfig: { apiRoot },
		} = getConfig();

		const params = {
			stadium_id: 1,
		};
		await axios.post(`${apiRoot}/api/v1/stadium/info`, {}, { params });

		// then
		expect(apiRoot).toBe("http://localhost:8000");
		expect(mock).toHaveBeenCalledWith(`${apiRoot}/api/v1/stadium/info`, {}, { params });
	});
});
