import React, { useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'

const NoteApp = () => {
    // const [notes, setNotes] = useState([])
    const [notes, dispatch] = useReducer(notesReducer, [])

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem("notes"))
        if(notesData) {
            dispatch({ type: 'POPULATE_NOTES', notes: notesData })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <div className='container py-5'>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card mb-3">
                            <div className="card-header">Notes</div>
                            <div className="card-body">
                                {
                                    notes && (
                                        <table className='table table-sm table-striped mb-0'>
                                            <tbody>
                                                {
                                                    <NoteList />
                                                }
                                            </tbody>
                                        </table>
                                    )
                                }
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-header">Add a New Note</div>
                            <div className="card-body">
                                <AddNoteForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NotesContext.Provider>
    )
}

export default NoteApp