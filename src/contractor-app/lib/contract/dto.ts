export type ContractField = {
  readonly name: string,
  readonly type: string,
}

export type ContractDetails = {
  readonly response: ReadonlyArray<{
    readonly code: number,
    readonly description: string,
    readonly fields: ReadonlyArray<ContractField>
  }>
  readonly body: ReadonlyArray<ContractField>,
  readonly comment: string,
}

export type Contract = {
  readonly contract: ContractDetails,
  readonly method: string,
  readonly module: string,
  readonly endpoint: string,
}

export type Contracts = { readonly [module: string]: ReadonlyArray<Contract> }
