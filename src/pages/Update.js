import React from 'react';
import {useState} from "react";


function Update(props) {

  console.log("update", props)

  // const id = props.match.params.id;
  
  const content = props.content;
  console.log("update", content)

  // const lesson = content.find(l => l._id === id);

  // console.log(id)

  // const [editForm, setEditForm] = useState(lesson);

  // const handleChange = event => {
  //   setEditForm({...editForm, [event.target.name] : event.target.value})
  // }

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   props.updateContent(editForm);
  //   props.history.push("/");
  // }

  // console.log(content);

    



  return (
  <div>
    <p>Update</p>
     {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
       
        <input type="submit" value="Update Person" /> */}
    </div>
  )
}

export default Update;