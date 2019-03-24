import React from 'react'

export default function Loader(props) {
  return (
    <span>
      <i className="fas fa-circle-notch fa-spin"></i> {props.message || 'Loading...'}
    </span>
  )
}
