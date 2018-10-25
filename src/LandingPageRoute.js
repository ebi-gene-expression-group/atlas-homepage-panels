import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import LandingPage from './LandingPage'
import HomePagePanel from './HomePagePanel'

const AboutPage = () =>(
	<div className="NotFoundPage"> Home Page</div>
);


const LandingPageRoute = ({host, resource, panelNameAList, panelNameBList}) => (
	<div>
		<Switch>

			<Route exact path="/" render={props => (<HomePagePanel {...props} host={host}
				resource={resource} panelNameAList={panelNameAList} panelNameBList={panelNameBList} />)}/>

			<Route path="/HCA" component={LandingPage}/>
		</Switch>

	</div>
);

export default withRouter(LandingPageRoute)