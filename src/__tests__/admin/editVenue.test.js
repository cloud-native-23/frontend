import { describe, jest, test, expect } from "@jest/globals"; 
import { render, screen } from "@testing-library/react";
import getConfig from "next/config";
import axios from "axios";
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
