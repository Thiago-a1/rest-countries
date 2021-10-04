import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { Detail } from './pages/Detail';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Homepage} exact />
				<Route path="/detail/:id" component={Detail} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;