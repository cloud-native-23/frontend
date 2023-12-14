import "@testing-library/jest-dom";
import { jest } from "@jest/globals"; 

jest.mock("next/config", () => () => ({
	publicRuntimeConfig: {
		apiRoot: "http://localhost:8000",
		frontendRoot: "http://localhost:3000",
	},
}));

jest.mock("@auth0/nextjs-auth0/client", () => {
	const originalModule = jest.requireActual("@auth0/nextjs-auth0/client");
	const mockSession = {
		expires: new Date(Date.now() + 2 * 86400).toISOString(),
		user: { name: "admin", email: "cloudnativeg23@gmail.com" }
	};
	return {
			__esModule: true,
			...originalModule,
			useUser: jest.fn(() => 
			({data: mockSession, status: "authenticated"})  // return type is [] in v3 but changed to {} in v4
		),
	};
});

jest.mock("next/router", () => ({
	useRouter: jest.fn()
}));
