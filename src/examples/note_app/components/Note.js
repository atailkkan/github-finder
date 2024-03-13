import React, { useContext } from "react"
import NotesContext from '../context/notes-context'

const Note = ({ note }) => {

  const { dispatch } = useContext(NotesContext)

  // const removeNote = (title) => {
  //   // setNotes(notes.filter(note => note.title !== title))
  //   dispatch({ type: "REMOVE_NOTE", title });
  // };

  return (
    <tr>
      <td style={{ width: "50%" }}>{note.title}</td>
      <td style={{ width: "50%" }}>{note.body}</td>
      <td>
        <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })} className="btn btn-sm btn-danger" >
          <i className="fas fa-times"></i>
        </button>
      </td>
    </tr>
  );
};

export default Note;
