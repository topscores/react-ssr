import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Hello.css'

const Hello = ({name}) => (
  <div className={s.container}>
    <h1>Hello, {name}</h1>
  </div>
)

export default withStyles(s)(Hello)