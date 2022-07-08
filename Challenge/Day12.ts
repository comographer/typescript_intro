declare module "lodash" {
  function head<T>(arr: T[]): T;
  function hasIn(object: object, key: string): boolean;
  function isBoolean<T>(value: T): boolean;
  function toString<T>(value: T): string;
  function split(string: string, separator: string, limit: number): string[];
  function hasPath(object: object, path: [] | string): boolean;
  function filter<T>(array: T[], predicate: T): T[];
  function every<T>(array: T[], predicate: T): boolean;
  function map<T>(array: T[], iteratee: T): T[];
}
