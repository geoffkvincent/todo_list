import React from 'react'

const styles = {
  link: {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'blue',
    marginLeft: '5px',
    marginRight: '5px',
  }
}

const filterLink = (current, text, setFilter) => {
  if (current === text)
    return <span>{text}</span>
  return (
    <span 
      style={styles.link} 
      onClick={ () => setFilter(text) }
    >
      {text}
    </span>
  )
}

const Footer = ({ view, setFilter }) => (
  <div>
    { ['All', 'Active', 'Complete'].map( text => filterLink(view, text, setFilter ) ) }
  </div>
)

export default Footer
