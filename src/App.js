import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change 
  // handlers you need to work with your state

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

  addToList = item => {
    this.setState({list: [...this.state.list, item]});
  }

  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} />
        <TodoForm add={this.addToList} />
      </div>
    );
  }
}

export default App;
