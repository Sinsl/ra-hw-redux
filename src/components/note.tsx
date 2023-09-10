import { NoteProps } from "../types/typesNotes"

export const Note = ({note, onEdited, onDelete}: NoteProps) => {
  return (
    <div className="note" data-id={note.id}>
      <div className="note-title">{note.title}</div>
      <div className="note-price">{note.price}</div>
      <div className="note-action">
        <span className="material-icons" onClick={() => onEdited(note.id)}>edit</span>
        <span className="material-icons" onClick={() => onDelete(note.id)}>close</span>
      </div>      
    </div>
  )
}