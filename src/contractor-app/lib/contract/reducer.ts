import { ContractAction } from './actions'
import { Contract } from './dto'

export type ContractState = {
  readonly contracts: { readonly [module: string]: ReadonlyArray<Contract> },
}

const initialState: ContractState = {
  contracts: require('../../../../contracts.json'),
}

export const contractReducer = (state: ContractState = initialState, action: ContractAction): ContractState => {
// tslint:disable-next-line cyclomatic-complexity
    switch (action.type) {

      default:
        return state
    }
  }
