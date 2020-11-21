import React, { Component } from 'react';

function User(props) {
    return <h1>Welcome back!</h1>
}
function Guset(props) {
    return (
        <div>
            <h1>Please Sign up.</h1>
        </div>
    );
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <User/>;
    }
    else{
        return <Guset/>
    }
}

function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>
}
function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>
}

class OnpageRender extends Component{

    constructor(props){
        super(props);
        this.handleloginClick = this.handleloginClick.bind(this);
        this.handlelogoutclick = this.handlelogoutclick.bind(this);
        this.state = {isLoggedIn: false};
    }
    handleloginClick(){
        this.setState({isLoggedIn: true});
    }
    handlelogoutclick(){
        this.setState({isLoggedIn: false});
    }
  
    render(){

        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button= <LogoutButton onClick={this.handlelogoutclick}/>;
         
        }
        else{
            button = <LoginButton onClick={this.handleloginClick}/>;
        }

        return(
           <div>
               <Greeting isLoggedIn = {isLoggedIn}/>
               {button}
           </div>
        );
    }

}
export default OnpageRender;
