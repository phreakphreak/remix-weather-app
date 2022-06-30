import { installGlobals } from "@remix-run/node/globals";
import "@testing-library/jest-dom/extend-expect";
// import { afterAll, afterEach, beforeAll } from "vitest";

// import { server } from "~/mocks/server";

installGlobals();

// Start server before all tests
// beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

// //  Close server after all tests
// afterAll(() => server.close());

// // Reset handlers after each test `important for test isolation`
// afterEach(() => server.resetHandlers());
