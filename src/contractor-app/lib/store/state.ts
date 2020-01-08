import { RouterState } from 'connected-react-router'

import { ContractState } from '../contract'

export type State = {
  readonly contract: ContractState,
  readonly router: RouterState,
}
