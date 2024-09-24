import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {

    const [noteDetails, setNoteDetails] = useState({
        title: "",
        content: ""
    });
    const [isExpandedNote, setIsExpantedNote] = useState(false);

    function handleEvent(event) {
        const {name, value} = event.target;
        setNoteDetails((prevValue)=> {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function addNote(event) {
        props.addNewNote(noteDetails);
        event.preventDefault();
        setNoteDetails({
            title: "",
            content: ""
        });
    }

    function showExpantedNote() {
        setIsExpantedNote(true);
    }
    return (
        <div>
        <form className="create-note">
            {isExpandedNote && 
          <input onChange={handleEvent} name="title" placeholder="Title" value={noteDetails.title}/>}
          <textarea onClick={showExpantedNote} onChange={handleEvent} name="content" placeholder="Take a note..." rows={isExpandedNote ? "3" : "1"} value={noteDetails.content} />
          <Zoom in={isExpandedNote}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
          </Zoom>
        </form>
      </div>
    );
}

export default CreateArea;