import React from 'react'
import ReactDOM from 'react-dom'

import HomePagePanel from '../src/index.js'
import { SceaHomepageSpeciesContainer, SceaHomePageLatestExperimentContainer } from 'atlas-homepage-cards'

const render = (options, target) => {
  ReactDOM.render(<HomePagePanel {...options} SpeciesCardType={SceaHomepageSpeciesContainer} 
    LatestExperimentCardType={SceaHomePageLatestExperimentContainer} />, document.getElementById(target))
}

export {render}
