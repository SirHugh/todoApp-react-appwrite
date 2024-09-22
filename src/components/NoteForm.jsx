import db from "../appwrite/databases";

function NoteForm({ setNote }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const noteBody = e.target.body.value;
    if (noteBody === "") return;

    const payload = { body: noteBody };

    try {
      const response = await db.tasks.create(payload);
      console.log(response);

      setNote((prevState) => [response, ...prevState]);

      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="body"
        placeholder={"Whats on the agenda?"}
        autoComplete="off"
      />
    </form>
  );
}

export default NoteForm;
