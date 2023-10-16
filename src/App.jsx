import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import NoteInput from "./components/NoteInput";
import { useState } from "react";

// import notes from "./notes";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <NoteInput onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          key={index}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
