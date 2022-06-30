type Coordinates = {
  latitude: number;
  longitude: number;
};

type QuerySearch = string | Coordinates;

export async function fetchWeather(q: QuerySearch) {
  try {
    const method = "GET";
    const headers = {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key": "99cd70112dmsh874359de5ee0960p1a0eb3jsna25b0e22f9cf",
    };
    const urlBase = `https://weatherapi-com.p.rapidapi.com/weather/today?lang=en&location=${url}`;

    const response = await globalThis.fetch(url);
    throw "fetchWeather() should return a Promise";
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// const options = {
//   method: "GET",
//   headers: {

// };

// fetch(
//   "https://weatherapi-com.p.rapidapi.com/future.json?q=London&dt=2022-12-25",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
