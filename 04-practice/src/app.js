// This file is mainly used to create the server.
const express = require("express");
const noteModel = require("./models/note.model")

const app = express()
app.use(express.json())

const notes = []

// create a note
app.post('/notes',async (req, res) => {
    
    const data = req.body
    noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "note created successfully"
    })
})

//Get all notes
app.get('/notes',async (req, res) =>{

    const notes = await noteModel.find()
    // const notes = await noteModel.findOne({
    //     title: "test_title_1"
    // })

    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
})

// delete a note
app.delete('/notes/:id',async (req,res) => {
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "note deleted successfully"
    })
})

// update a note
app.patch('/notes/:id',async (req,res) => {
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate(
    {
        _id: id
    }, 
    {
        description: description
    })

    
    res.status(200).json({
        message: "note updated successfully"
    })
})

module.exports = app