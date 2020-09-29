const {Router} = require("express")
const router = Router();
const fs = require("fs")
const FileEstudiantes = fs.readFileSync('./estudiantes.json', 'utf-8')
const JSONEstudiantes = JSON.parse (FileEstudiantes)

console.log(JSONEstudiantes)

router.get("/", (req, res) => {
  res.send("API REST estudiantes")
})

router.get("/estudiantes", (req, res) => {
res.json(JSONEstudiantes)
})

router.post("/estudiantes", (req, res) => {
console.log("El tamaño es : ", JSONEstudiantes.length)
res.send("Recibido!!")
})



module.exports = router;