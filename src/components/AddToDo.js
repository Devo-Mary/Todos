import React,{useState} from 'react'
import "./style.css"

function AddToDo({setToDo,list}) {
    
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        // event.preventDefault();

        if(text != "")
        {
            setToDo([...list,{value:text,complate:false,visible:false}])
        }

        setText("")
    }

    return (
        <form onSubmit={onSubmit}>
            <input value = {text} onChange={(e)=>setText(e.target.value)} className="new-todo" placeholder='What needs to be done'></input>
        </form>
    )
}

export default AddToDo