const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()

//Middelwares
app.use(morgan('dev'))
app.use(express.json())

app.use("/api", require("./routes/estudiantes.js"))

app.get("/", (req, res) => {
  res.send("Api CRUD")
})

app.set("puerto", 8081)


app.listen(app.get("puerto"), () => {
console.log(`Servidor corriendo en el puerto ${app.get("puerto")}` )
})
