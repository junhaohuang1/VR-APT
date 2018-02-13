import React from 'react';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const NoteListForm = (props) => (
  <div>
    <ul className="list-group">{props.children}</ul>
    <Card className="container">
      <form action='/' onSubmit={props.onSubmit}>
      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="note"
          onChange={props.onChange}
          value={props.note}
        />
      </div>
      <div className="button-line">
        <RaisedButton type="submit" label="Upload Comment" primary />
      </div>
      </form>
    </Card>
  </div>
)

export default NoteListForm;
