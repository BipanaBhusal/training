import React, { Component } from 'react'

export default class Newform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             employee:{
                 name:"",
                 age:null,
                 email:""

             }
        }
    }



    handleChange=(e)=>{
         this.setState({
             [e.target.employee]:e.target.value
          }) 
    }

    handleSubmit=(e)=>{
        e.preventDefault()
    }
    
    render() {
        return (
            <div>
              <form>
                  <label> NAME</label>
                  <input type ="text" value={this.state.name} onChange={this.handleChange}/>
                  <label> AGE</label>
                  <input type ="number" value={this.state.age} onChange={this.handleChange}/>
                  <label> Email</label>
                  <input type ="text" value={this.state.email} onChange={this.handleChange}/>
                  <button onClick={this.handleSubmit}>Submit</button>
                  </form>  
            </div>
        )
    }
}
