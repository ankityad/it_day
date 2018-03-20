import React, { Component } from 'react';
import '../App.css';


var firebase = require('firebase');
 var config = {
    apiKey: "AIzaSyC0lJjxkoHr0xA5lCn2TZIFvwDcqfCGu6o",
    authDomain: "vrlogin-e1e40.firebaseapp.com",
    databaseURL: "https://vrlogin-e1e40.firebaseio.com",
    projectId: "vrlogin-e1e40",
    storageBucket: "vrlogin-e1e40.appspot.com",
    messagingSenderId: "141379384186"
  };
  firebase.initializeApp(config);


class Login extends Component {
    
    login(event){
          const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email,password);
        
        const auth = firebase.auth();
       const promise = auth.signInWithEmailAndPassword(email,password);
        promise.catch(e=>{
            var err= e.message;
            console.log(err);
            this.setState({err: err});
        });
    }
    
    signup(){
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email,password);
                const auth = firebase.auth();

       const promise= auth.createUserWithEmailAndPassword(email,password);
        
        promise.then(user =>{
              
            
              firebase.database().ref('/users'+user.uid).set({
            email:user.email,
                  password:user.password
        });
           
        });
    promise.catch(e =>{
        var err = e.message;
        this.setState(({err: err}));
        
    });
    }
    
    
    constructor(props){
        super(props);
        this.state={
            err: ''
        };
        this.login=this.login.bind(this);
        this.signup=this.signup.bind(this);
    }
  render() {
    return (
    <div>
        <input type="email" placeholder="Email" id="email" ref="email"/><br/>
        <input type="password" placeholder="password" id="password" ref="password" />
        <p>{this.state.err}</p>
        <button onClick={this.login}>Login</button>
        <button onClick={this.signup}>SignUp</button>
    </div>
    )
  }
}
export default Login;