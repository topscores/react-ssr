import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '../commons/Hello'
import collectCss from '../commons/collectCss'

const collectedCss = new Set()
const App = collectCss(collectedCss)(Hello)
ReactDOM.render(<App name="topscores" />, document.getElementById('root'))