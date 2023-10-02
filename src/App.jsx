import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

import notes from "./notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((note) => (
        <Note title={note.title} content={note.content} key={note.key} />
      ))}
      <Footer />
    </>
  );
}

export default App;
