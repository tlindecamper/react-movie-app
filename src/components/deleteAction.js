import React from 'react';
import { Link} from "react-router-dom"


export default function DeleteAction(props)  {

    function movieDelete() {
        fetch(`http://localhost:5000/delete/${props.id}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json()})
        .catch(err => {
            console.log("Delete error" + err)
        })
    }
  
    return (
      <div className=''>
        <Link onClick={movieDelete} to={"/"} >Delete</Link>
        
      </div>
    );
  }
