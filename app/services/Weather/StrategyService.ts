export interface StrategyService<T> {
  fetchAPI(): Promise<T | Error>;
}
