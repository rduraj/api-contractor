import { routerMiddleware } from 'connected-react-router'
import { AnyAction, applyMiddleware, compose, createStore, Middleware, Store } from 'redux'

import { history } from '../router'
import { rootReducer } from './root-reducer'
import { State } from './state'

const middlewares: ReadonlyArray<Middleware> = [
  routerMiddleware(history),
]

// tslint:disable-next-line:no-any
const composeEnhancers = process.env.NODE_ENV !== 'production' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose

const enhacer = composeEnhancers(applyMiddleware(...middlewares))

export const store = (): Store<State> => {
  const storeTemp = createStore<State, AnyAction, any, any>( // tslint:disable-line:no-any
    rootReducer,
    enhacer,
  )

  return storeTemp
}
