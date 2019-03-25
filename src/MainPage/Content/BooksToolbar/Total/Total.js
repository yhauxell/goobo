import React from 'react'
import './Total.css';
export default function Total(props) {
  return (
      <span className="total">Displaying {props.size} of {props.total} books for &nbsp;<strong>"{props.term}"</strong></span>
  )
}
