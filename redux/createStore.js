export default function createStore(reducer, initialState, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer, initialState)
  }

  let currentState = reducer(initialState || undefined, {})
  let listeners = []

  function getState() {
    return currentState
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)

    for (let i = 0; i < listeners.length; i++) {
      listeners[i]()
    }

    return action
  }

  function subscribe(listener) {
    listeners.push(listener)

    return function unsubscribe() {
      listeners = listeners.filter(item => item === listener)
    }
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}
