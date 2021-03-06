import React from 'react'
import PropTypes from 'prop-types'

import CardContainer from './CardContainer'
import PanelBar from './PanelBar'

import AtlasHPCard from 'atlas-homepage-cards'

class HomePagePanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	panelNameA: `Species`,
    	panelNameB: `Featured`
    }
    this.changePanel = this.changePanel.bind(this)
  }

  changePanel(event){
  	this.props.panelNameAList.includes(event.target.id ) ?
  	this.setState({
  		panelNameA:  event.target.id
  	}) :
  	this.setState({
  		panelNameB:  event.target.id
  	})
  }

  render() {
  	var {panelNameAList, panelNameBList, host} = this.props
  	return (
  		<div className="row expanded margin-top-large" data-equalizer>

	    	 <div className="small-12 medium-12 large-6 columns">
				<div className="callout experiment-list-latest padding-bottom-for-button" data-equalizer-watch>

					<PanelBar key="species-bar" panelNames={panelNameAList} onClick={this.changePanel}/>
				    
				    <div className="tabs-content" data-tabs-content="browse-by-tabs">
				        <CardContainer key="species" panelName={this.state.panelNameA} CardType={AtlasHPCard} host={host}/>
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
				        <CardContainer key="experiments" panelName={this.state.panelNameB} CardType={AtlasHPCard} host={host}/>
			    	</div>
			       
			       <div className="row align-row-to-bottom">
			        <div className="small-6 small-centered columns margin-top-large">
			            <a id="viewAllLink" href={`${host}/experiments`} className="button float-center">View all species</a>
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
  host: PropTypes.string.isRequired
}

export default HomePagePanel