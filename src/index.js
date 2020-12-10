import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddData from './addData.js';
import Book from './Book.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
<Router>
	<Switch>
		<Route exact path={'/'} component={App}/>
		<Route exact path={'/add'} component={AddData}/>
		<Route exact path={'/buku'} component={Book}/>
		<Route path={'*'} render={()=><>Nothing</>}/>
	</Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
