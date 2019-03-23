import React from 'react'
import './Sidebar.css';
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar__books-filters">
        <li className="sidebar__books-filters__filter">2018</li>
        <li className="sidebar__books-filters__filter">2019</li>
        <li className="sidebar__books-filters__filter">2020</li>
      </ul>
    </aside>
  )
}
