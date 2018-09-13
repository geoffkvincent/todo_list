import React from 'react'

class Form extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name } = this.state
    this.props.addTodo(name)
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={name}
          onChange={this.handleChange}
          required 
          placeholder="Add Item" 
        />
      </form>
    )
  }
}

export default Form
