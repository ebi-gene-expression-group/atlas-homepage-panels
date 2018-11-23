import React from 'react'
import ReactDOM from 'react-dom'

import HomePagePanel from '../src/index.js'
import {SceaHomepageSpeciesContainer} from 'atlas-homepage-cards'

const render = (options, target) => {
  ReactDOM.render(<HomePagePanel {...options} CardType={SceaHomepageSpeciesContainer} />, document.getElementById(target))
}

export {render}
