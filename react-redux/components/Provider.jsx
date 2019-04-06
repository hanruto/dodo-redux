import React, { Component } from 'react'
import Context from './Context'

export default class Provider extends Component {
  state = {
    storeState: this.props.store.getState(),
    store: this.props.store
  }

  componentDidMount() {
    this.subscribe()
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe()
    this._isMounted = false
  }

  componentDidUpdate(prevProps) {
    if (this.props.store !== prevProps.store) {
      if (this.unsubscribe) this.unsubscribe()
      this.subscribe()
    }
  }

  subscribe() {
    const { store } = this.props
    this.unsubscribe = store.subscribe(() => {
      const newStoreState = store.getState()
      this.setState(state =>
        state.storeState === newStoreState
          ? null
          : { storeState: newStoreState }
      )
    })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
