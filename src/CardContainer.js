import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import LatestExperimentCardContainer from './LatestExperimentCardContainer'

const CardContainer = ({CardType, panelName, host, resource}) => {
   switch(panelName) {
      case `Featured`:
          return (
            <div className="row margin-bottom-xxlarge">
              <Card host={host} resource={resource[`Featured`]} cardName={resource[`Featured`].toUpperCase()}/>
            </div>) 
          break;
      case `Latest experiments`:
          return (
            <div className="row margin-bottom-xxlarge">
              <LatestExperimentCardContainer host={host} resource={resource[`Latest`]}/>
            </div> )
          break;
      default:
          return (
            <div className="row margin-bottom-xxlarge">
              <CardType host={host} resource={resource[panelName]}/>
            </div>)
  } 
}

CardContainer.propTypes = {
  host: PropTypes.string.isRequired,
  resource: PropTypes.arrayOf(PropTypes.string).isRequired,
  panelName: PropTypes.string.isRequired,
  CardType: PropTypes.func
}

export default CardContainer
