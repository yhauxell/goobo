import React from 'react'
import './Total.css';
export default function Total(props) {
  return (
      <span className="total">Display {props.size} books for &nbsp;<strong>"{props.term}"</strong></span>
  )
}
