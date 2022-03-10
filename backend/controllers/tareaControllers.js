const getTareas = (req,res) => {
    res.json({message: 'Obtener tareas desde getTareas'})
} 

const postTareas = (req,res) => {
    res.json({message: 'Crear una tarea'})
} 



const putTareas = (req,res) => {
    res.json({message: `Modificar una tarea ${req.params.id} `})
} 



const deleteTareas = (req,res) => {
    res.json({message: `Eliminada la tarea ${req.params.id} `})
} 



module.exports = {
    getTareas,
    postTareas,
    putTareas,
    deleteTareas
}