import React from 'react'
import PropTypes from 'prop-types'

class CardContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  	var cardNames = {
  		species: [`HCA`,`HCB`,`HCD`],
  		animals: [`animal1`, `animal2`],
  		plants: [`plant1`],
  		fungi: [`F1`,`F2`,`F3`,`F4`]
  	}
    var {CardType} = this.props
  	return (
      <div className="row margin-bottom-xxlarge">
        {cardNames[this.props.panelName].map(cardName => <CardType key={cardName} cardName={cardName}/>)}
      </div>

    )


  }
}

CardContainer.propTypes = {
  atlasUrl: PropTypes.string
}

export default CardContainer
