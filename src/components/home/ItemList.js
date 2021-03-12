import React from 'react'

function ItemList({date, name, summa}) {
 
  const classes = []

  summa >= 80 ? classes.push('green') : classes.push('red')

  return (
    <li className="list-item">
      <div className="case-title">
        <p className="date">{date}</p>
        <p className="equipment-item">{name}</p>
      </div>
      <p className={classes.join('')}>{`${summa} %`}</p>
    </li>
  )
}

export default ItemList