const express = require("express");
const app = express();
const PORT = 3000
const usersDb = require("./db")
const mongoose = require("mongoose")

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.render("index", {users : usersDb.users, title : "All users"})
})

app.get("/add-user", (req, res)=>{
    res.render("add-user", {title : "Add user"})
})

app.post("/add-user", (req, res)=>{
    const id = usersDb.id++
    console.log(req.body)
    const {name, email, age} = req.body
    usersDb.users.push({id, name, email, age})
    res.redirect("/")
})



app.get("/edit-user/:id", (req, res)=>{
    const {id} = req.params
    const user = usersDb.users[id]
    res.render("edit-user", {title : "Edit user", user})
})

app.post("/edit-user/:id", (req, res)=>{
    const {id} = req.params
    const {name, email, age} = req.body
    usersDb.users[id] = {id, name, email, age}
    res.redirect("/")
})

app.delete("/delete-user/:id", (req, res)=>{
    console.log("delete user request received")
    const {id} = req.params
    const userIndex = usersDb.users.findIndex(user => user.id === id)
    usersDb.users.splice(userIndex, 1)
    console.log(usersDb.users);
    res.redirect("/")
})

app.listen(PORT, ()=>{
    console.log("Listening for requests on port ",PORT)
})