import React from 'react'
import PropTypes from 'prop-types'
import logo from './assets/img/HCA-logo.jpg'

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  	var {host, cardName} = this.props
  	return (
		<div className="small-4 columns combo text-center padding-top-medium">
	  		<span>I am a card for {cardName}</span> <br />
	        <a href={`${host}/${cardName.toLowerCase()}`}>
	            <img className="margin-bottom-large experiment-thumbnail" src={logo}  height="800" />
	            <h6>
	                <a href="/gxa/experiments/E-MTAB-4344">Human tissues</a><br />
	                <a href="/gxa/experiments/E-GEOD-26284">Human cells</a>
	            </h6>
	        </a>
		</div>
  	)

  }
}

Card.propTypes = {
  host: PropTypes.string.isRequired,
  CardType: PropTypes.func
}

export default Card
