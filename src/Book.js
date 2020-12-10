import React, {useState, useEffect} from 'react';
import { db } from './dbFire.js';
import { useHistory } from 'react-router-dom';

const Book = (props) => {
const search = props.location.search;
const params = new URLSearchParams(search);
const data_id = params.get('id');
// eslint-disable-next-line
const history = useHistory();
// console.log(data_id)
const [ books, setBooks ] = useState([]);
function render(){
	db.ref(`/buku/${data_id}`).once('value', items =>{
	  const bukuUpdate = items.val();
	  return setBooks(bukuUpdate);

	})
}


useEffect(()=>{
	render();
	// eslint-disable-next-line
}, [setBooks])

function renderData(){
	return (<>
		<h1>{books.nama}</h1>
		<ul>
			<li>Pengarang : {books.author}</li>
			<li>Deskripsi : {books.deskripsi}</li>
			<li>Harga : {books.harga}</li>
		</ul>
		</>)
}

function dataNotFound() {
	return (<div><ul>Loading...</ul></div>)
}

if(data_id === null || data_id === ''){
	return (

			<div><ul>Data Not Found</ul></div>

		)
}

  return (
    <div>
    	{
    		books === null || books.length === 0 ? (dataNotFound()) : (renderData())
    	}
    </div>
  )
}

export default Book;