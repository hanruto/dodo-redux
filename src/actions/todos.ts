import { ADD, CLEAR } from '../constants/todos'

export function add(payload) {
  return { type: ADD, payload }
}

export function clear() {
  return { type: CLEAR }
}
