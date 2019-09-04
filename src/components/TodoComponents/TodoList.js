// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class TodoList extends React.Component {
    constructor(){
        super();
        this.state = {
            list : [
                'first',
                'second',
                'third'
            ]
        }
    }

    render(){
        return(
            <ul>
                {this.state.list.map( (item, index) => (
                    <li key={index}>{item}</li>
        ))}
            </ul>
        )
    }
}

export default TodoList;