import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

class ExperimentBox extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
  	return (
		<div className="row">
    		<div className="small-12 columns">
        		<h3>{this.props.title}</h3>
	        	<div className="row small-up-1 medium-up-2 large-up-3">
	  				<Card/>
	  			</div>
  			</div>
  		</div>
  	)

  }
}

ExperimentBox.propTypes = {
  atlasUrl: PropTypes.string
}

export default ExperimentBox
