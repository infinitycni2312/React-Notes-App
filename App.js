import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
const App =()=> {
  const[notes,setNotes] = useState([
    {
        id: nanoid(),
        text:"this is my 1st note!",
        date:"12/2/2023",
    },
    {
      id: nanoid(),
      text:"this is my 2nd note!",
      date:"12/3/2023",
    }, 
    {
      id: nanoid(),
      text:"this is my 3rd note!",
      date:"2/2/2023",
    },
    {
      id: nanoid(),
      text:"this is my new note!",
      date:"23/2/2023",
    },
]);

const [searchText , setSearchText] = useState('');
const [darkmode , setDarkMode] = useState(false);


useEffect(() => {
  const savednotes=JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );
  if(savednotes){
    setNotes(savednotes);
  }
}, []);

useEffect(() => {
      localStorage.setItem
      ('react-notes-app-data',
      JSON.stringify(notes) ); 
   }, [notes]);

    const addNote = (text) => {
      //console.log(text);
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString()
      }
      const newNotes=[...notes,newNote];  //appending new note to the previously added notes
       setNotes(newNotes)                  //using usestate function  
    };

    const deleteNote = (id) => {
      const newNotes =notes.filter((note)=>note.id !== id);
      setNotes(newNotes);
    }


  return(
<div className={`${darkmode && 'dark-mode'}`}>
  <div className="container">
    <Header handleToggleDarkMode={setDarkMode}/> 
    <Search handleSearchNote={setSearchText}/>
    <NotesList
     notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
     handleAddnote={addNote} 
     handleDeleteNote={deleteNote}
     />  
  </div>
</div>
  );
};
export default App;
