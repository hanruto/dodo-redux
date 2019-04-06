import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as todos } from './todos'

const reducer = combineReducers({ todos })

function logger({ getState }) {
  return function dispatchEnhancer(dispatch) {
    return function newDispatch(action) {
      console.log('will dispatch', action)
      const returnValue = dispatch(action)
      console.log('state after dispatch', getState())
      return returnValue
    }
  }
}

const store = createStore(reducer, undefined, applyMiddleware(logger))
export default store
