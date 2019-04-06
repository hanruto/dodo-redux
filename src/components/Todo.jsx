import React from 'react'
import { connect } from 'react-redux'
import { add, clear } from '../actions/todos'
function mapStateToProps(store) {
  return { todos: store.todos }
}

function mapDispatchToProps(dispatch) {
  return {
    add: payload => dispatch(add(payload)),
    clear: () => dispatch(clear())
  }
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Todo extends React.Component {
  state = {
    currentInput: ''
  }

  handleClear = () => {
    this.props.clear()
  }

  handleAdd = () => {
    const { currentInput } = this.state
    this.props.add(currentInput)
    this.setState({ currentInput: '' })
  }

  handleChange = e => this.setState({ currentInput: e.target.value })

  render() {
    const { list } = this.props.todos
    const { currentInput } = this.state

    return (
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <input type="text" onChange={this.handleChange} value={currentInput} />
        <button onClick={this.handleClear}>clear</button>
        <button onClick={this.handleAdd}>add</button>
      </div>
    )
  }
}
