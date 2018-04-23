import React from 'react';

export function Song(props) {
  return (
    <ul className="list-group">
      <li className="list-group-item" id={props.id}>
        <p><b>Song:</b> {props.title}</p>
        <p><b>Artist:</b> {props.artist}</p>
        <img src={props.image}/>
      </li>
    </ul>
  )
}
