import type { Weather } from "./WeatherAPI.d";
import { FetchAPI } from "./FetchAPI";
import { ForecastWeatherAPI } from "./ForecastWeatherAPI";

test("FetchAPI", async () => {
  //   const apiKey = process.env.WEATHER_API_KEY as string;
  const apiKey = "";
  const params = {
    q: "London",
    days: "3",
  };
  const fetchAPI = new FetchAPI<Weather>(
    new ForecastWeatherAPI(apiKey, params)
  );

  const data = await fetchAPI.getData();
  console.log(data);
  expect(fetchAPI.getData()).resolves.toEqual(
    expect.objectContaining({
      location: expect.objectContaining({
        name: expect.any(Number),
        region: expect.any(String),
        country: expect.any(String),
        lat: expect.any(Number),
        lon: expect.any(Number),
        tz_id: expect.any(String),
        localtime_epoch: expect.any(Number),
        localtime: expect.any(String),
      }),
    })
  );
});
