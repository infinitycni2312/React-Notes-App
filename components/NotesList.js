import Note from './Note';
import Addnote from './Addnote'
//map function to loop over the list and render a note component

const NotesList =({ notes,handleAddnote ,handleDeleteNote}) =>{
    return(
        <div className="notes-list">
            {notes.map((note) =>(
            <Note 
            id={note.id} 
            text={note.text} 
            date={note.date}
            handleDeleteNote={handleDeleteNote}
             />  //calling the note.js anding using props after this we call Addnote
            ) )}
            <Addnote handleAddnote={handleAddnote}/>  
        </div> 
    );
};
export default NotesList;