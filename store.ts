import { createStore, combineReducers, applyMiddleware } from 'redux'
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import reducers from './re-ducks/index'

const rootReducer = combineReducers(reducers)
const makeStore: MakeStore<any> = (context: Context) => createStore(rootReducer, applyMiddleware(thunk))

export const wrapper = createWrapper<any>(makeStore, {debug: true})
