const express = require('express')
const app = express()
const carrerasRoute = require('./routes/carreras.route')
const materiasRoute = require('./routes/materias.route')

require('dotenv').config()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(carrerasRoute)
app.use(materiasRoute)

app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`)
})