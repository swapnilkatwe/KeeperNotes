import React, {useState} from "react";

function CreateArea(props) {

    const [noteDetails, setNoteDetails] = useState({
        title: "",
        content: ""
    });

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

    return (
        <div>
        <form>
          <input onChange={handleEvent} name="title" placeholder="Title" value={noteDetails.title}/>
          <textarea onChange={handleEvent} name="content" placeholder="Take a note..." rows="3" value={noteDetails.content} />
          <button onClick={addNote}>Add</button>
        </form>
      </div>
    );
}

export default CreateArea;