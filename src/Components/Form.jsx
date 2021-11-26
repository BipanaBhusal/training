import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          student:{
             username:'',
             emailaddress:'',
             subject:'',
             password:''
        }
        }
    }


     handleChange=(e)=>{
         this.setState({
          [ e.target.student]:e.target.value
           
         })
     }
    handlerUsernamechange =(event) => {
        this.setState({
            username:event.target.value

        })
    }
    handlerAddresschange =(event) =>{
        this.setState({
            emailaddress:event.target.value
        })
    }
    handlerSubjectchange =(event) =>{
        this.setState({
            subject:event.target.value
        })
    }
    clickHandler =(event) =>{
      
        event.preventDefault()
        alert("this is ur submit")
        this.setState({
            student:{}
        })
    }
    handlerPasswordchange =(event) =>{
        this.setState({
            password:event.target.value
        })
    }
    
    render() {
        console.log(this.state.student)
        return (
            <form onSubmit={this.clickHandler}>
            <div style={{color:'green',margin:'50px 0px', textAlign:'center',fontWeight:'bold'}}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handlerUsernamechange}/>
                </div><br />

                <div>
                    <label>Email</label>
                    <input type="text" value={this.state.emailaddress} onChange={this.handlerAddresschange}/>
                    </div><br />

                    <div>
                    <label>Password</label>
                    <input type="text" value={this.state.password} onChange={this.handlerPasswordchange}/>
                    </div><br />

                    <div>
                      <label>Subject</label>  
                      <select value ={this.state.subject} onChange={this.handlerSubjectchange}>
                      <option value =" "> </option>
                          <option value ="react">React</option>
                          <option value ="angular">Angular</option>
                          <option value ="vue">Vue</option>
                      </select>
                    </div><br />
                    <div>
                     <label>Gender</label>
                     <input type="radio" value={this.state.gender} onChange={this.handlerGenderChange} name="gender" /> Male
        <input type="radio" value= {this.state.gender} onChange={this.handlerGenderChange}  name="gender"/> Female
        <input type="radio" value={this.state.gender} onChange={this.handlerGenderChange} name="gender" /> Other
                 </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    </div>
        
            </form>
        )
    }
}
