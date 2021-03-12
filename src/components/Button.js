import React from 'react'

function Button({event, title}) {
  return (
      <button 
        onClick={event}
        className="create-item"
      >
        {title}
      </button>
  )
}

export default Button