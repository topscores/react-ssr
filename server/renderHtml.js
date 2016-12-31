import React from 'react'
import { renderToString } from 'react-dom/server'

export default () => {
  const html = renderToString(<h1>Hello, world</h1>)
  return `
    <!doctype html>
    <html>
      <head><title>Hello, ssr</title></head>
      <body>
        <div id="root">
          ${html}
        </div>
      </body>
    </html>
  `
}