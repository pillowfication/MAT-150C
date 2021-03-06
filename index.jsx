import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import zf from './foundation.scss'
import HW1 from './homework/hw1.jsx'
import HW2 from './homework/hw2.jsx'
import HW4 from './homework/hw4.jsx'
import HW5 from './homework/hw5.jsx'
import HW6 from './homework/hw6.jsx'
import P from './phy9a/phys_disc6.jsx'

const routes = [
  { index: 1, component: HW1 },
  { index: 2, component: HW2 },
  { index: 4, component: HW4 },
  { index: 5, component: HW5 },
  { index: 6, component: HW6 },
  { index: 'asdf', component: P }
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
