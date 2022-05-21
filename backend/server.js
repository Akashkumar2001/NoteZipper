const express=require("express");
const app=express();
const notes=require('./data/notes');
const dotenv=require('dotenv');


//Get->to get data from the backend
//Post-> To send the data to the backend
//Put-> to update the data of the backend(also has an id, as ont of the parameter)
//Delete-> to delete the data from the backend.

dotenv.config();

app.get('/',(req,res)=>{
    res.send("API is running..");  //API endpoint is the route on where the data is served, while
    //requesting data from the backend
    //Here '/' is the endpoint
});

app.get('/api/notes',(req,res)=>{
    res.json(notes);
});

app.get('/api/notes/:id',(req,res)=>{
    const note=notes.find((n)=> n._id===req.params.id);  //params is used to get the data from the request URL
    //n._id is from the notes api, req.params.id is from the request URL.
    res.send(note);
})

const PORT=process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started at port ${PORT}`));