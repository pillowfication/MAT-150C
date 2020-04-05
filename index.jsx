import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import zf from './foundation.scss'
import HW1 from './homework/hw1.jsx'

const routes = [
  { index: 1, component: HW1 }
]

class Home extends Component {
  render () {
    return (
      <div>
        <h1>MAT 150C</h1>
        <ul>
          {routes
            .map(route =>
              <li key={route.path}>
                <Link to={'/hw-' + route.index}>Homework {route.index}</Link>
              </li>
            )}
        </ul>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <Router>
        <div className={zf.gridContainer}>
          <Switch>
            <Route exact path='/' component={Home} />
            {routes.map(route =>
              <Route key={route.index} path={'/hw-' + route.index} component={route.component} />
            )}
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
