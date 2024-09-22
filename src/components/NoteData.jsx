import { useState } from "react";
import db from "../appwrite/databases";

function NoteData({ noteData, setNotes }) {
  const [note, setNote] = useState(noteData);

  const handleUpadate = async () => {
    console.log(note.completed);
    const completed = !note.completed;
    console.log(completed);
    try {
      await db.tasks.update(note.$id, { completed });
      setNote({ ...note, completed: completed });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      db.tasks.delete(note.$id);

      setNotes((prevState) => prevState.filter((i) => i.$id !== note.$id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="note-wrapper">
      <span className="note-body" onClick={handleUpadate}>
        {note.completed ? <s>{note.body}</s> : <>{note.body}</>}
      </span>
      <button onClick={handleDelete} style={{ color: "red" }}>
        DELETE
      </button>
    </div>
  );
}

export default NoteData;
