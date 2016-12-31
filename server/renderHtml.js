import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import Hello from '../commons/Hello'
import collectCss from '../commons/collectCss'

export default () => {
  const collectedCss = new Set() // CSS for all rendered React components
  const App = collectCss(collectedCss)(Hello)
  const html = renderToString(<App name="topscores" />)
  return `
    <!doctype html>
    <html>
      <head><title>Hello, ssr</title></head>
      <style type="text/css">${[...collectedCss].join('')}</style>
      <body>
        <div id="root">${html}</div>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  `
}