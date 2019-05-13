declare module 'react-materialize'

declare type Contract = {
  readonly contract: string,
  readonly method: string,
  readonly module: string,
  readonly name: string,
}

declare type Contracts = { readonly [module: string]: ReadonlyArray<Contract> }

declare const contracts: Contracts
