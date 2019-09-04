import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            itemInput: ''
        }
    }

    handleInput = e => {
        this.setState({itemInput: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.add({task: this.state.itemInput, 
                        id: Date.now(),
                        completed: false})
        this.setState({itemInput: ''});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' 
                       value={this.state.itemInput} 
                       onChange={this.handleInput}/>
                <button type='submit'>Add</button>
            </form>
        )
    }
}

export default TodoForm;