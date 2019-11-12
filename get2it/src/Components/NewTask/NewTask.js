import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class NewTask extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
                <a className ="button is-primary"> 
                <span className="icon">
                <i className="fa fa-plus"></i>
                </span>
                <span>Add New Task</span>
                </a> 
            </div>
         );
    }
}
 
export default NewTask;