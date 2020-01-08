import { ActionsUnion, createAction } from '@evojam/redux-utils'

export enum ContractActionType {
  GetBrakeLiquidTypesSuccess = '[DICTIONARY] GET BRAKE FLUID TYPES SUCCESS',
}

export const ContractAction = {
  getBrakeLiquidTypes: () => createAction(ContractActionType.GetBrakeLiquidTypesSuccess),
}

export type ContractAction = ActionsUnion<typeof ContractAction>
