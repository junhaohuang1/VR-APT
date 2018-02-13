
import React from 'react';
const NoteItem = (props) => (
  <div>
    <li className="list-group-item">
        <div className="row">
          <div className="colxs-8 sm-9">
            <p>{props.body}</p>
            <p>Author {props.username}</p>
          </div>
      </div>
    </li>
  </div>
)
export default NoteItem;
