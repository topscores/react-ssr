import React from 'react'
import WithContext from 'react-with-context'

export default (collectedCss) => (Component) => (props) => {
  const context = { insertCss: (...styles) => styles.forEach(style => collectedCss.add(style._getCss()))}
  return (
    <WithContext context={context}>
      <Component {...props} />
    </WithContext>
  )
}