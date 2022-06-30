import type { StrategyService } from "./StrategyService";

export class FetchAPI<T> {
  private _strategy: StrategyService<T>;
  constructor(strategy: StrategyService<T>) {
    this._strategy = strategy;
  }
  public setStrategy(strategy: StrategyService<T>) {
    this._strategy = strategy;
  }
  public async getData(): Promise<T | Error> {
    try {
      return await this._strategy.fetchAPI();
    } catch (e) {
      if (e instanceof Error) return e;
      return new Error("Something went wrong");
    }
  }
}
