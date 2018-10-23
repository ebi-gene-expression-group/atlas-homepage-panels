import React from 'react'
import PropTypes from 'prop-types'

import CardContainer from './CardContainer'
import PanelBar from './PanelBar'
import Card from './Card'

class HomePagePanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	panelName: `species`
    }
    this.changePanel = this.changePanel.bind(this)
  }

  changePanel(event){
  	this.setState({
  		panelName:  event.target.id
  	})
  }



  render() {
  	return (
  		<div className="row expanded margin-top-large" data-equalizer>

	    	 <div className="small-12 medium-12 large-6 columns">
	    	  <div className="callout experiment-list-latest padding-bottom-for-button" data-equalizer-watch>
			    <div className="callout browse-by padding-bottom-for-button" data-equalizer-watch>
					
					<PanelBar panelNames={[`Species`, `Animals`, `Plants`, `Fungi`]} onClick={this.changePanel}/>
				    
				    <div className="tabs-content" data-tabs-content="browse-by-tabs">
				        <CardContainer panelName={this.state.panelName} CardType={Card}/>
				    </div>
			
			      <div className="row align-row-to-bottom">
			        <div className="small-6 small-centered columns margin-top-large">
			            <a id="viewAllLink" href='/gxa/experiments' className="button float-center">View all species</a>
			        </div>
			       </div>

			    </div>
			 </div>
			</div>


			<div className="small-12 medium-12 large-6 columns">
			 <div className="callout experiment-list-latest padding-bottom-for-button" data-equalizer-watch>
	 			 <div className="callout browse-by padding-bottom-for-button" data-equalizer-watch>
				    <PanelBar panelNames={[`Latest experiments`]} onClick={this.changePanel}/>
				    
				    <div className="tabs-content" data-tabs-content="browse-by-tabs">
				        <CardContainer panelName={this.state.panelName} CardType={Card}/>
			    	</div>
			       
			       <div className="row align-row-to-bottom">
			        <div className="small-6 small-centered columns margin-top-large">
			            <a id="viewAllLink" href='/gxa/experiments' className="button float-center">View all species</a>
			        </div>
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