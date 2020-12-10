import React, { Component } from 'react';

export default class App extends Component {

  state = {
    count: this.props.value,
    tags: ['tags1', 'tags2', 'tags3']
  };

  GetClass(){
    let classes = 'badge m-3 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
      return classes;
  }

  handleTambah() {
    console.log('click tambah', this)
    const count = this.state.count;
    this.setState({
      count : count +1
    })
  }

  GetTags(){
    let mapTags = this.state.tags.map((tag, k)=>{
      return (<li key={k}>{tag}</li>)
    })

    let noTags = this.state.tags.length === 0 ? (<p>They are no Tags</p>): (mapTags) ;
    

    return noTags;
  }

  render() {
    return (
      <>

      <div className='container'>
        {
          this.props.children 
        }
        @
        {
          this.props.countId
        }
        <span className={this.GetClass()}>{this.state.count === 0 ? 'zero' : this.state.count}</span>
        <button onClick={()=>this.handleTambah()}className='btn btn-primary'>Tambah</button>
        
          <ul>{this.GetTags()}</ul>
        
      </div>
      </>
    );
  }
}
