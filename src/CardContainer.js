import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

class CardContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    var {CardType, panelName, host} = this.props

  	return (
      panelName == `featured` ?
        <div className="row margin-bottom-xxlarge">
            <Card host={host} cardName={`HCA`}/>
        </div> :
          panelName == `latest experiments` ?
          <div className="row margin-bottom-xxlarge">
              <CardType host={host} resource={`json/experiments/latestExperiments`} latestExperiments={true}/>
          </div> :
          <div className="row margin-bottom-xxlarge">
              <CardType host={host} resource={`json/experiments/popularSpecies`} latestExperiments={false}/>
          </div>
    )
  }
}

CardContainer.propTypes = {
  atlasUrl: PropTypes.string
}

export default CardContainer
