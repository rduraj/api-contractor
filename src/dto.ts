export type Contract = {
  readonly module: string,
  readonly name: string,
  readonly contract: string,
}

export type Contracts = ReadonlyArray<Contract>
