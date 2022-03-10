const express = require ('express')
const router = express.Router()
const {getTareas, postTareas, putTareas, deleteTareas} = require ('../controllers/tareaControllers')


router.route('/').get(getTareas).post(postTareas)
//router.get ('/',getTareas)
//router.post ('/', postTareas)

router.route('/:id').put(putTareas).delete(deleteTareas)
//router.put ('/:id', putTareas)
//router.delete ('/:id', deleteTareas)




module.exports = router