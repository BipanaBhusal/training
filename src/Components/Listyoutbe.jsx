import React, { Component } from 'react'

export default class Listyoutbe extends Component {
    render() {
        const arr=[10,20,30,40];
      
        return (
            <div>
           
    {
        arr.map((num) =>{
            return <div>{num*2}</div>
        })
    }
           
               
            </div>
        )
    }
}
