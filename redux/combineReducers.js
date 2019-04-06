export default function combineReducers(reducers) {
  return function combinedReducer(prevStates = {}, action) {
    const nextStates = {}

    Object.entries(reducers).forEach(([name, reducer]) => {
      const prevState = prevStates[name]
      const nextState = reducer(prevState, action)
      nextStates[name] = nextState
    })

    return nextStates
  }
}
