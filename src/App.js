import React, { Component } from 'react';
import { db } from './dbFire.js';

export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      buku: []
    }
  }

  getData(){
    const shoot = this;
       db.ref('/buku/').on('value', items =>{
          const dataShoot = shoot;
          const bukuUpdate = items.val();
          if(bukuUpdate !== null){
             dataShoot.setState({
                 buku : bukuUpdate
           })
         }
      })
  }


  componentDidMount() {
    this.getData()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.buku === this.state.buku){
    
  //   }
  // }
  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log(nextState)
  // }

  render() {

    return (
      <React.Fragment>
        <span>Semua Buku</span>
        <ul>
         {this.cekBuku()}
        </ul>

        <span>Rilis Buku</span>
        <ul>
          { this.rilisBuku() }
        </ul>

      </React.Fragment>
    );
  }

  publishBuku(data){
    // console.log()
    const idBuku = data.id-1 ;
    return db.ref('/buku/').child(`${idBuku}/`).update({ publish: true});
  }

  unPublishBuku(data){
     const idBuku = data.id-1 ;
      return db.ref('/buku/').child(`${idBuku}/`).update({publish: false});
  }

  removeBuku(data){
     const idBuku = data.id-1 ;
   if(window.confirm('Yakin Mau hapus')){
     return db.ref('/buku/').child(`${idBuku}/`).remove();
   } else{
    return;
   }
  }

  lihatDetail(data){
   const { datakey } = data;
   const { history } = this.props;
   history.push(`/buku/?id=${datakey}`)
  }

  cekBuku(){
     // disable-eslint-next-line
    const { buku } = this.state;

    return buku.length === 0  ? ('Tidak ada buku') : (buku.map(buku=>{
          if(buku.publish === true){
            return (<li key={buku.id-1} style={{color: 'green'}} >{buku.nama} 
              <button onClick={()=>this.unPublishBuku(buku)}>Unpublish</button>
              <button onClick={()=>this.removeBuku(buku)}>Hapus</button>
              </li>);
            ;
          } else{
            return (<li style={{color: 'red'}} key={buku.id-1}>{buku.nama} 
                        <button onClick={()=>this.publishBuku(buku)}>Publish</button>
                    </li>);
          }

        }));
  }

  rilisBuku() {
    const { buku } = this.state;
   return buku
   .filter(buku=> buku.publish === true)
   .map(buku=>
   ( <li style={{color: 'green'}} key={buku.id-1}>{buku.nama}  
       <button onClick={()=>this.lihatDetail(buku)}>Lihat Detail</button></li>))
  }

}
