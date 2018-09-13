import React, { Fragment } from 'react'
import List from './List'
import Form from './Form'
import Footer from './Footer'
import Clock from './Clock'
import Market from './Market'

class App extends React.Component {
  state = {
    todos: [],
    view: 'All',
    showClock: false,
    showMarket: false,
  }

  toggleShowMarket = () => {
    this.setState({ showMarket: !this.state.showMarket })
  }

  toggleShowClock = () => {
    this.setState({ showClock: !this.state.showClock })
  }

  //componentDidMount() {
  //  //Interact with DOM
  //  //Fetch data from a server
  //}

  //componentDidUpdate(prevProps, prevState, snapshot) {
  //  //After first render everytime new state or props 
  //}

  //componentWillUnmount() {
  //  //Right before the component is removed from the DOM
  //}

  //getSnapshotBeforeUpdate(prevProps, prevState) {
  //}

  //static getDerivedStateFromProps(props, state) {
  //  //return { count: props.todos.count }
  //}

  //componentDidCatch(error, info) {
  //}

  //shouldComponentUpdate(nextProps, nextState) {
  //}

  setFilter = (view) => {
    this.setState({ view })
  }

  visibleTodos = () => {
    const { todos, view } = this.state
    switch(view) {
      case 'Active':
        return todos.filter( t => !t.complete )
      case 'Complete':
        return todos.filter( t => t.complete )
      default:
        return todos
    }
  }

  addItem = (name) => {
    const id = Math.floor(( 1 + Math.random()) * 0x1000)
    const { todos } = this.state
    const todo = { name, id, complete: false }
    this.setState({ todos: [todo, ...todos] })
  }

  handleClick = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }

        return todo
      })
    })

  }

  render() {
    const { view, showClock, showMarket } = this.state
    return (
      <Fragment>
        { showClock && <Clock /> }
        <button onClick={this.toggleShowClock}>
          { showClock ? 'Hide' : 'Show' }
        </button>
        { showMarket && <Market /> }
        <button onClick={this.toggleShowMarket}>
          Market Toggle
        </button>
        <Form addTodo={this.addItem} />
        <List 
          name="Todo List"
          todos={this.visibleTodos()} 
          todoClick={this.handleClick}
        />
        <Footer view={view} setFilter={this.setFilter} />
      </Fragment>
    )
  }
}

export default App
