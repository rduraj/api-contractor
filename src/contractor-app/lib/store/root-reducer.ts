import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { contractReducer } from '../contract'
import { history } from '../router'
import { State } from './state'

export const rootReducer = combineReducers<State>({
  contract: contractReducer,
  router: connectRouter(history),
})
