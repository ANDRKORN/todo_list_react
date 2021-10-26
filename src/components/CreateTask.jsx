import React, { Component } from "react";

class CreateTask extends Component{
    state={
        value:"",
    };

    handleChange=(e)=>{
        this.setState({
            value:e.target.value,
        })
    };
    handleCreateTask=()=>{
        this.props.onCreate(this.state.value);
        this.setState({value:''})
    };
    render(){
        return(
            <div className="create-task">
                <input type="text" 
                onChange={this.handleChange} 
                value={this.state.value} 
                className="create-task__input"/>
                <button  className="btn create-task__btn"
                    onClick={this.handleCreateTask}
                >Create</button>
            </div>
        );
    }    
};

export default CreateTask;