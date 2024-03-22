const insertUserNote = async (title, note) =>{
   var responce;
    await fetch("http://localhost:8000/insertNotes", {
        method: "POST", 
        mode: "cors",
        headers:{"Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"},
        body: JSON.stringify({title, note})
    }).then((result)=>{
        responce = result.json();
    }).catch((error)=>{
        responce = error;
    })
    return responce.status;
} 