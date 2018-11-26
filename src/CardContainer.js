import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import LatestExperimentCardContainer from './LatestExperimentCardContainer'

const CardContainer = ({panelName, host, resource}) => {
  switch(panelName) {
    case `Featured`:
      return <Card host={host} resource={resource[`Featured`]}/>
      break
    case `Latest experiments`:
      return <LatestExperimentCardContainer host={host} resource={resource[`Latest`]}/>
      break
    default:
      return null
  } 
}

CardContainer.propTypes = {
  panelName: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  resource: PropTypes.object.isRequired
}

export default CardContainer
