import React from 'react'
import PropTypes from 'prop-types'

import CardContainer from './CardContainer'
import PanelBar from './PanelBar'
import Card from './Card'
import AtlasHPCard from 'atlas-homepage-cards'

class HomePagePanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	panelNameA: `species`,
    	panelNameB: `featured`
    }
    this.changePanelA = this.changePanelA.bind(this)
    this.changePanelB = this.changePanelB.bind(this)
  }

  changePanelA(event){
  	this.setState({
  		panelNameA:  event.target.id
  	})
  }

  changePanelB(event){
  	this.setState({
  		panelNameB:  event.target.id
  	})
  }
  

  render() {
  	var {panelNameAList, panelNameBList, host} = this.props
  	return (
  		<div className="row expanded margin-top-large" data-equalizer>

	    	 <div className="small-12 medium-12 large-6 columns">
			    <div className="callout browse-by padding-bottom-for-button" data-equalizer-watch>
					
					<PanelBar panelNames={panelNameAList} onClick={this.changePanelA}/>
				    
				    <div className="tabs-content" data-tabs-content="browse-by-tabs">
				        <CardContainer key="species" panelName={this.state.panelNameA} CardType={AtlasHPCard} host={host}/>
				    </div>
			
			       	<div className="row align-row-to-bottom">
			         <div className="small-6 small-centered columns margin-top-large">
			            <a id="viewAllLink" href={`${host}/experiments`} className="button float-center">View all species</a>
			         </div>
			        </div>
			    </div>
			</div>


			<div className="small-12 medium-12 large-6 columns">
			 <div className="callout experiment-list-latest padding-bottom-for-button" data-equalizer-watch>
				    <PanelBar panelNames={panelNameBList} onClick={this.changePanelB}/>

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
  atlasUrl: PropTypes.string
}

export default HomePagePanel