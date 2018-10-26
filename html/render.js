import React from 'react'
import ReactDOM from 'react-dom'

import HomePagePanel from '../src/index.js'

const render = (options, target) => {
  ReactDOM.render(<HomePagePanel {...options} />, document.getElementById(target))
}

export {render}
