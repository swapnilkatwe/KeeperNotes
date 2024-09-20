import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevValue => {
      return [...prevValue, note];
    });

  }

  function deleteItem(id) {
    setNotes(prevValue=> {
      return prevValue.filter((value, index)=>{
          return index !== id
      });
    });
  }

  return (
    <div>
        <Header />
        <CreateArea addNewNote={addNote}/> 
        {notes.map((note, index) => (<Note key={index} onDelete={deleteItem}  id={index} title={note.title} content={note.content}/>))}
        <Footer />
    </div>
  );
}

export default App;