import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import LatestExperimentCardContainer from './LatestExperimentCardContainer'

const CardContainer = ({CardType, panelName, host}) => {
   switch(panelName) {
      case `Featured`:
          return (
            <div className="row margin-bottom-xxlarge">
              <Card host={host} cardName={`HCA`}/>
            </div>) 
          break;
      case `Latest experiments`:
          return (
            <div className="row margin-bottom-xxlarge">
              <LatestExperimentCardContainer host={host} resource={`json/experiments/latestExperiments`}/>
            </div> )
          break;
      default:
          return (
            <div className="row margin-bottom-xxlarge">
              <CardType host={host} resource={`json/experiments/popularSpecies`}/>
            </div>)
  } 
}

CardContainer.propTypes = {
  host: PropTypes.string.isRequired,
  panelName: PropTypes.string.isRequired,
  CardType: PropTypes.func
}

export default CardContainer
