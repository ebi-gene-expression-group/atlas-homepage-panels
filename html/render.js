import React from 'react'
import ReactDOM from 'react-dom'

import HomePagePanel from '../src/index.js'
import AtlasHPCard from 'atlas-homepage-cards'

const render = (options, target) => {
  ReactDOM.render(<HomePagePanel {...options} cardType={AtlasHPCard} />, document.getElementById(target))
}

export {render}
