import React from 'react'
import PropTypes from 'prop-types'

import PanelContent from './PanelContent'
import PanelBar from './PanelBar'

class HomePagePanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	speciesTabName: Object.keys(this.props.speciesResources)[0],
    	experimentTabName: Object.keys(this.props.experimentResources)[0]
    }
    this.changePanel = this.changePanel.bind(this)
  }

  changePanel(event){
  	this.props.speciesResources[event.target.id] ?
    	this.setState({speciesTabName:  event.target.id}) :
    	this.setState({experimentTabName:  event.target.id})
  }

  render() {
  	const {host, speciesResources, experimentResources, SpeciesCardType, LatestExperimentCardType} = this.props
  	return (
  		<div className={`row expanded margin-top-large`} data-equalizer>

	    	<div className={`small-12 medium-12 columns`}>
				  <div className={`callout padding-bottom-for-button`} data-equalizer-watch>
            <PanelBar panelNames={Object.keys(speciesResources)} onClick={this.changePanel}/>
            <div className={`tabs-content`} data-tabs-content={`browse-by-tabs`}>
						  <div className={`row margin-bottom-xxlarge`}>
				        <PanelContent host={host} panelName={this.state.speciesTabName} resource={speciesResources} CardType={SpeciesCardType} />
				      </div>
			    	</div>
            <div className={`row align-row-to-bottom`}>
              <div className={`small-6 small-centered columns margin-top-large`}>
                <a id={`viewAllLink`} href={`${host}experiments`} className={`button float-center`}>View all species</a>
              </div>
			      </div>
			    </div>
			  </div>

			  <div className={`small-12 medium-12 columns`}>
			    <div className={`callout padding-bottom-for-button`} data-equalizer-watch>
				    <PanelBar panelNames={Object.keys(experimentResources)} onClick={this.changePanel}/>
				    <div className={`tabs-content`} data-tabs-content={`browse-by-tabs`}>
				    	<div className={`row margin-bottom-xxlarge`}>
				        	<PanelContent host={host} panelName={this.state.experimentTabName} host={host} resource={experimentResources} CardType={LatestExperimentCardType} />
				      </div>
			    	</div> 
			      <div className={`row align-row-to-bottom`}>
              <div className={`small-6 small-centered columns margin-top-large`}>
                <a id={`viewAllLink`} href={`${host}experiments`} className={`button float-center`}>View all species</a>
			        </div>
			       </div>
			    </div>
			  </div>

		  </div>
    )
  }
}

HomePagePanel.propTypes = {
  host: PropTypes.string.isRequired,
  speciesResources: PropTypes.object.isRequired,
  experimentResources: PropTypes.object.isRequired,
  SpeciesCardType: PropTypes.func.isRequired,
  LatestExperimentCardType: PropTypes.func.isRequired
}

export default HomePagePanel