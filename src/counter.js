import React, { Component } from 'react';
import App from './App.js';

export default class Counter extends Component {
	state = {
		counters : [
			{id:1, value:0, name: 'alam'},
			{id:2, value:0, name: 'bowo'},
			{id:3, value:0, name: 'ilham'}
		]
	}
	render() {
		return (
			<React.Fragment>
				
				{
					this.state.counters.map(counter=>{
						return (

							<App key={counter.id} value={counter.value} countId={counter.id}>
								<h2>Vote | {counter.name}</h2>
							</App>
						)
					})	
				}
			</React.Fragment>
		);
	}
}
