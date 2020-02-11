export type Contract = {
  readonly module: string,
  readonly name: string,
  readonly status: ContractStatus,
  readonly contract: string,
}

export type Contracts = ReadonlyArray<Contract>

export enum ContractStatus {
  ACTIVE = 'active',
  DEPRECATED = 'deprecated',
}
