import type { StrategyService } from "./StrategyService";
import { WeatherAPI } from "./WeatherAPI";

export class ForecastWeatherAPI<T>
  extends WeatherAPI
  implements StrategyService<T>
{
  private _apiUrl: URL;
  private _params: { [key: string]: string };
  constructor(apiKey: string, params: { [key: string]: string }) {
    super(apiKey);
    this._apiUrl = this.getApiUrl("/forecast.json");
    this._params = params;
  }
  async addParams(): Promise<ForecastWeatherAPI<T>> {
    Object.entries(this._params).forEach(([key, value]) => {
      this._apiUrl.searchParams.append(key, value);
    });
    return this;
  }

  public async fetchAPI(): Promise<T|Error> {
    try {
      await this.addParams();
      if (!this.validateApiKey()) throw new TypeError("API_KEY not found");
      const response = await globalThis.fetch(this._apiUrl, this.getOptions());

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      if (e instanceof TypeError) {
        return new Error(e.message);
      }
      if (e instanceof Error) {
        return e;
      }
      return new Error("Something went wrong");
    }
  }
}
