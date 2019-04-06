import React from 'react'

const Context = React.createContext()

const Provider = Context.Provider

function connect() {
  return function hoc(Component) {
    return class C extends React.Component {
      render() {
        const props = this.props
        return (
          <Context.Consumer>
            {value => <Component {...props} {...value} />}
          </Context.Consumer>
        )
      }
    }
  }
}

export { Provider, connect }
