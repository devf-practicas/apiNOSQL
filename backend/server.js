//console.log('Chau mundo')
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express ()
app.use ('/api/tareas', require('./routes/tareaRoutes'))

app.listen(port, () => console.log (`El servidor esta corriendo en el puesto ${port}`))
