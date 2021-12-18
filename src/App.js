import React from 'react';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todo: [], //items
      currentTodo: {  // currentItem
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentTodo: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addTodo(e) {
    e.preventDefault(e)
    const newTodo = this.state.currentTodo;
    console.log(newTodo);
    if(newTodo.text !== ''){
      const newTodos = [...this.state.todo, newTodo];
      this.setState({
        todo: newTodos,
        currentTodo: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteTodo(key) {
    const filterTodos = this.state.todo.filter(item =>
      item.key !== key);
      this.setState({
        todo: filterTodos
      })
  }

  render() {
    return (
      <div className="app">
        <header>Warehouse Information</header>
        <SearchPage/>
        <DetailsPage/>
      </div>
    );
  }
  
}

export default App;

