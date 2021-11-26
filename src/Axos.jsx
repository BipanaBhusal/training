import React, { Component } from 'react'
    import axios from 'axios'
import {DataGrid,GridColumn} from 'rc-easyui' ;

export default class Axos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           data:[]  
        }
    }
    componentDidMount(){
     let api =' https://jsonplaceholder.typicode.com/comments' ;
      
     axios.get(api)
     .then((response)=>{
         this.setState({data:response.data})
     })

    }
    
    render() {
        return (
            <div>
               <DataGrid data={this.state.data} style={{height:1000}}>
          <GridColumn field="id" title=" ID"></GridColumn>  
          <GridColumn field="name" title="Name"></GridColumn>  
          <GridColumn field="email" title="Email"></GridColumn>  
          <GridColumn field="body" title="Body"></GridColumn> 
          </DataGrid> 
            </div>
        )
    }
}
