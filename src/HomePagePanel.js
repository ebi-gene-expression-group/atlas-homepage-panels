import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

class HomePagePanel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  	return (
  		<span>I am a list of cards </span>
  	)

  }
}

HomePagePanel.propTypes = {
  atlasUrl: PropTypes.string
}

export default HomePagePanel