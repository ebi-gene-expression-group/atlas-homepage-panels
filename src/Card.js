import React from 'react'
import PropTypes from 'prop-types'
import logo from './assets/img/HCA-logo.jpg'

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  	return (
		<div className="small-4 columns combo text-center padding-top-medium">
	  		<span>I am a card for {this.props.cardName}</span> <br />
	        <a href="/gxa/experiments?experimentSet=ENCODE">
	            <img className="margin-bottom-large experiment-thumbnail" src={logo}  width="100" height="50"/>
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
  atlasUrl: PropTypes.string
}

export default Card
