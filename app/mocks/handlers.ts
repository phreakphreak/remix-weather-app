import { rest } from "msw";
import { forecastData } from "./forecastData";

export const handlers = [
  rest.get("http://localhost:3001", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(forecastData));
  }),
];
