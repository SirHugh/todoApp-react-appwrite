import { useEffect, useState } from "react";
import db from "../appwrite/databases";
import NoteForm from "../components/NoteForm";
import { Query } from "appwrite";
import NoteData from "../components/NoteData";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    // const response = await databases.listDocuments(
    //   import.meta.env.VITE_DATABASE_ID,
    //   import.meta.env.VITE_COLLECTION_ID_TASKS
    // );

    const response = await db.tasks.list([Query.orderDesc("$createdAt")]);
    console.log(response.documents);
    setNotes(response.documents);
  };
  return (
    <>
      <div>
        <h1>✍️ My Todo List</h1>
      </div>
      <h2>Add a note</h2>
      <NoteForm setNote={setNotes} />
      <br />
      <hr />
      <h1>Notes</h1>
      {notes.map((note) => (
        <NoteData key={note.$id} noteData={note} setNotes={setNotes} />
      ))}
    </>
  );
}

export default Notes;
