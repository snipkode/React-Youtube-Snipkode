import React, { Component } from 'react';
import { db } from './dbFire.js';

export default class AddData extends Component {

	addData = () =>{
	
		const data = [{id:1, nama:'Magnet Rezeki', author: 'Nasrullah', harga: 12000, publish: true},
					{id:2, nama:'Pintu Surga', author: 'Ustadz Dzulkarnain', harga: 15000, publish: false},
					{id:3, nama:'Intervensi Alloh', author: 'KH. Abdul Shomad', harga: 34000, publish: true},
					{id:4, nama:'Gizi Ramadhan', author: 'KH. Abdullah Gymnastiar', harga: 50000, publish: false}]
		db.ref('/buku').set(data);
	}
	render() {
		return (
			<div>
				<button onClick={()=>this.addData()}>Tambah Data</button>
			</div>
		);
	}
}
