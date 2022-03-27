import React, { Component } from 'react';

class Text extends Component {
    state = {
        name: "",
        level: 0
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "") {
            alert("All fields required");
            return;
        }
        this.props.addNameHandler(this.state);
        this.setState({name: ""});

    };


    render() {
        return(
            <div>
                <p>Hello World</p>
                <div>
                    { state.name ! "" }
                <form className="ui form" onSubmit = {this.add} >
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={this.state.name}
                            onChange={ (e) => this.setState({name: e.target.value})} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Text;