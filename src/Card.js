import React from 'react'
import PropTypes from 'prop-types'
import logo from './assets/img/HCA-logo.jpg'

const Card = ({host, resource, cardName}) => {
  	return (
		<div className="small-4 columns combo text-center padding-top-medium">
	        <a href={`${host}${resource}`}>
	            <img className="margin-bottom-large experiment-thumbnail" src={logo}  height="800" />
	        </a>
		</div>
  	)
}

Card.propTypes = {
  host: PropTypes.string.isRequired,
  CardType: PropTypes.func
}

export default Card
