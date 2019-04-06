// app.js
import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { HashRouter as Router, Route } from 'react-router-dom'
import TodosPage from './pages/TodosPage'
import { Provider } from 'react-redux'
// import { Provider } from './context'
import store from './reducers'
import 'antd/dist/antd.min.css'
import './styles/index.scss'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={TodosPage} />
      </Router>
    </Provider>
  )
}

export default hot(App)
