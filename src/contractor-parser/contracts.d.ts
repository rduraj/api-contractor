declare type Contract = {
  readonly contract: string,
  readonly method: string,
  readonly module: string,
  readonly name: string,
  readonly status: string,
}

declare type Contracts = { readonly [module: string]: ReadonlyArray<Contract> }
