export class WeatherAPI {
  private _apiKey: string;
  private _method: string;
  private _baseUrl: URL;

  constructor(apiKey: string) {
    this._method = "GET";
    this._baseUrl = new URL("https://weatherapi-com.p.rapidapi.com");
    this._apiKey = apiKey;
  }
  protected getApiUrl(path: string): URL {
    return new URL(path, this._baseUrl);
  }
  protected getOptions(): RequestInit {
    return {
      method: this._method,
      headers: {
        "X-RapidAPI-Host": this._baseUrl.host,
        "X-RapidAPI-Key": this._apiKey,
      },
    };
  }
  protected validateApiKey(): Boolean {
    return this._apiKey ? true : false;
  }
}

// export class HistoryWeatherAPI extends WeatherAPI {}

// export class TimeZoneWeatherAPI extends WeatherAPI {}

// export class AstronomyWeatherAPI extends WeatherAPI {}

// export class RealTimeWeatherAPI extends WeatherAPI {}
