import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import LandingPage from './LandingPage'

const About = () =>(
	<div className="NotFoundPage"> Home Page</div>
);


const LandingPageRoute = ({value,species,category,ResultElementClass,handleSelections,routepath, nextSelectedFacets}) => (
	<div>
		<Switch>
			// <Route exact path ={`/gxa/sc/search?geneID=${value}&species=${species}`} 
			// render={props => (<FetchLoader {...props} nextSelectedFacets={{}} handleSelections={handleSelections} ResultElementClass={ResultElementClass} 
			// host="http://localhost:8080/gxa/sc/json/search?ensgene=" resource={value} species={species?species.replace('+',' '):species}/>)}/>

			<Route exact path="/" component={AboutPage}/>

		</Switch>

	</div>
);

export default withRouter(LandingPageRoute)