import "@testing-library/jest-dom";
import { jest } from "@jest/globals"; 
import { setConfig } from "next/config";
import config from "./next.config";

setConfig(config);
require("dotenv").config();

jest.mock("next-auth/react", () => {
	const originalModule = jest.requireActual("next-auth/react");
	const mockSession = {
		expires: new Date(Date.now() + 2 * 86400).toISOString(),
		user: { name: "admin", email: "cloudnativeg23@gmail.com" }
	};
	return {
			__esModule: true,
			...originalModule,
			useSession: jest.fn(() => 
			({data: mockSession, status: "authenticated"})  // return type is [] in v3 but changed to {} in v4
		),
	};
});
