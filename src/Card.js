import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  	return (
  		<span>I am a list of cards </span>
  	)

  }
}

Card.propTypes = {
  atlasUrl: PropTypes.string
}

export default Card
