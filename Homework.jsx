import React, { Component } from 'react'

import styles from './Homework.scss'

class Homework extends Component {
  render () {
    return (
      <div className={styles.homework}>
        <div className={styles.header}>
          MAT 150C - Homework {this.props.index}<br />
          Markus Tran
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Homework
