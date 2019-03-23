import React from 'react'
import './Total.css';
export default function Total(props) {
  return (
      <span className="total">{props.size} of {props.total}</span>
  )
}
