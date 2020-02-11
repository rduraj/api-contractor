export type Contract = {
  readonly contract: string,
  readonly method: string,
  readonly module: string,
  readonly name: string,
  readonly status: ContractStatus,
}

export type Contracts = { readonly [module: string]: ReadonlyArray<Contract> }

export enum ContractStatus {
  ACTIVE = 'active',
  DEPRECATED = 'deprecated',
}
