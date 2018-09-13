import React from 'react'
import Todo from './Todo'

//Is this a class or a function component
// 1. Does this component have state
// 2. Does this component need lifecycle methods

const List = ({ name, todos, todoClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { todos.map( item => 
          <Todo 
            key={item.id} 
            {...item} 
            todoClick={todoClick}
          /> 
        ) 
      }
    </ul>
  </div>
)

export default List
