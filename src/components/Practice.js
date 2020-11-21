import React, { Component } from 'react';
// import React from 'react-dom';
import './P.css';

// function WarningBanner(props) {
//     if(!props.warn){
//         return null;
//     }
//     return (
//         <div className="warning">
//             Warning
//         </div>
//     )
// }

const numbers = [1,2,3];
const listItems = numbers.map((number) => <li>{number}</li>)

class Practice extends Component{

   render(){
       return(
        <ul>
            <li>{listItems}</li>
        </ul>
       )
   }

    // constructor(props){
    //     super(props);
    //     this.state = {showWarning: true};
    //     this.handleToggleClick = this.handleToggleClick.bind(this);
    // }

    // handleToggleClick(){
    //     this.setState(state => ({
    //         showWarning: !state.showWarning
    //     }))
    // }
    // render(){
    //     return (
    //         <div>
    //             <WarningBanner warn ={this.state.showWarning}/>
    //             <button onClick={this.handleToggleClick}>
    //                 {this.state.showWarning ? 'Hide' : 'Show'}
    //             </button>
    //         </div>
    //     )
    // }
}

export default Practice;