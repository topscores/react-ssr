import React from 'react'
import s from './Hello.css'

export default ({name}) => (
  <div className={s.container}>
    <h1>Hello, {name}</h1>
  </div>
)