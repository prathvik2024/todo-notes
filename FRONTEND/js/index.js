const insertUserNote = async (title, notes) =>{
   var responce;
    await fetch("http://localhost:8000/insertNotes", {
        method: "POST", 
        mode: "cors",
        headers:{"Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"},
        body: JSON.stringify({title, notes})
    }).then((result)=>{
        responce = result.json();
    }).catch((error)=>{
        responce = error;
    })
    // console.log(await responce);
    return await responce;
} 