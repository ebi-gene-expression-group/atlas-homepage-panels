import React from 'react'
import PropTypes from 'prop-types'
import CardContainer from './CardContainer'
import PanelBar from './PanelBar'

class HomePagePanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	panelNameA: this.props.panelNameAList[0],
    	panelNameB: this.props.panelNameBList[0]
    }
    this.changePanel = this.changePanel.bind(this)
  }

  changePanel(event){
  	this.props.panelNameAList.includes(event.target.id ) ?
    	this.setState({panelNameA:  event.target.id}) :
    	this.setState({panelNameB:  event.target.id})
  }

  render() {
  	const {panelNameAList, panelNameBList, host, resource, CardType} = this.props
  	return (
  		<div className="row expanded margin-top-large" data-equalizer>

	    	<div className="small-12 medium-12 large-6 columns">
				  <div className="callout experiment-list-latest padding-bottom-for-button" data-equalizer-watch>
            <PanelBar key="species-bar" panelNames={panelNameAList} onClick={this.changePanel}/>
            <div className="tabs-content" data-tabs-content="browse-by-tabs">
						  <div className="row margin-bottom-xxlarge">
				        <CardType key="species" host={host} resource={resource[this.state.panelNameA]}/>
				      </div>
			    	</div>
            <div className="row align-row-to-bottom">
              <div className="small-6 small-centered columns margin-top-large">
                <a id="viewAllLink" href={`${host}experiments`} className="button float-center">View all species</a>
              </div>
			      </div>
			    </div>
			  </div>

			  <div className="small-12 medium-12 large-6 columns">
			    <div className="callout experiment-list-latest padding-bottom-for-button" data-equalizer-watch>
				    <PanelBar key="experiments-bar" panelNames={panelNameBList} onClick={this.changePanel}/>
				    <div className="tabs-content" data-tabs-content="browse-by-tabs">
				    	<div className="row margin-bottom-xxlarge">
				        	<CardContainer key="experiments" panelName={this.state.panelNameB} host={host} resource={resource}/>
				        </div>
			    	</div> 
			      <div className="row align-row-to-bottom">
              <div className="small-6 small-centered columns margin-top-large">
                <a id="viewAllLink" href={`${host}experiments`} className="button float-center">View all species</a>
			        </div>
			       </div>
			    </div>
			  </div>

		  </div>
    )
  }
}

HomePagePanel.propTypes = {
  panelNameAList: PropTypes.arrayOf(PropTypes.string).isRequired,
  panelNameBList: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.string.isRequired,
  resource: PropTypes.object.isRequired,
  CardType: PropTypes.func.isRequired
}

export default HomePagePanel