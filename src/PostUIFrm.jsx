import React, { Component } from 'react'
import axios from 'axios'
import { Form, FormField, TextBox, CheckBox, ComboBox, LinkButton } from 'rc-easyui';

export default class PostUIFrm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            constructor() {
                super();
                this.state = {
                  user: {
                    userid: null,
                    title: null,
                    body: null,
                    accept: true
                  }
        }
    }
    handleChange =(name,value)=>{
        let user = Object.assign({}, this.state.user);
        user[user] = value;
        this.setState({ user: user })
      }
      handleSubmit =()=> {
     
        })
      }
    componentDidMount(){
        let api=' https://jsonplaceholder.typicode.com/posts' ;

        axios.post(api,this.state)
        .then((response)=>{
console.log(response)
        })
        .catch((error)=>{
            console.log(response)
        })
    }
  
    render() {
      const { userid, title,body } = this.state;
        return (
            <div>
               <Form
          style={{ maxWidth: 500 }}
          model={user}
          labelWidth={120}
          labelAlign="right"
          onChange={this.handleChange.bind(this)}
        >
          <div>
          <FormField name="userid" label="Userid">
            <TextBox></TextBox>
          </FormField>
          <FormField name="title" label="Title">
            <TextBox></TextBox>
          </FormField>
          <FormField name="body" label="Body">
            <ComboBox data={body}></ComboBox>
          </FormField>
          <FormField name="accept" label="Accept Me:">
            <CheckBox checked={user.accept}></CheckBox>
          </FormField>
          <FormField style={{ marginLeft: 120 }}>
            <LinkButton onClick={this.handleSubmit.bind(this)}>Submit</LinkButton>
          </FormField>
          </div>
        </Form>
        <p>{JSON.stringify(user)}</p>
      </div>
    );
  }
} 
        