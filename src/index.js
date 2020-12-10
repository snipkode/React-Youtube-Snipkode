import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter.js';
import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
<Router>
	<Switch>
		<Route exact path={'/'} component={Counter}/>
		<Route path={'*'} render={()=><>Nothing</>}/>
	</Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
