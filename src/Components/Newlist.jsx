import React, { Component } from 'react'

export default class Newlist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             employee:[
                 {id:1,name:'alex',address:'butwal'},
                 {id:1,name:'lixa',address:'butwal'},
                 {id:1,name:'alex',address:'butwal'},
                 {id:1,name:'alex',address:'butwal'},

             ]
        }
    }
    
    render() {
        return (
            <div>
                <h1>information</h1>
                <table style={{width:'500px'}}>
                <tr>
                    <th>Name</th>
                    <th>address</th>
                </tr>
                {this.state.employee.map((item,index)=>
                    {
                        return(
                <tr key={index}>
                    <td>{item.name}</td>
            
                    <td>{item.address}</td>

                </tr>
         ) })}
                </table>
            </div>
        )
    }
}
