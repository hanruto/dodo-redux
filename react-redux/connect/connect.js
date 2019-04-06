import React from 'react'
import Context from '../components/Context'

export default function connect(
  mapStateToProps = () => {},
  mapDispatchToProps = () => {}
) {
  return function hoc(Component) {
    return class NewComponent extends React.Component {
      render() {
        const originProps = this.props

        return (
          <Context.Consumer>
            {value => {
              const { storeState, store } = value
              const stateProps = mapStateToProps(storeState)
              const dispatchProps = mapDispatchToProps(store.dispatch)

              return (
                <Component
                  {...originProps}
                  {...stateProps}
                  {...dispatchProps}
                />
              )
            }}
          </Context.Consumer>
        )
      }
    }
  }
}
