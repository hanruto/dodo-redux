import { ADD, CLEAR } from '../constants/todos'

export const initialState = {
  list: ['eat', 'sleep', 'drink']
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: state.list.concat(action.payload)
      }

    case CLEAR:
      return {
        ...state,
        list: []
      }

    default:
      return state
  }
}
