const {Router}  = require ('express');
const nota      = require('../controllers/notes-controller');
const router    = Router();

const { siSesionActiva } = require('../helpers/session');


router.post("/notes/agregarNota", siSesionActiva, nota.agregarNota);
router.get("/notes/mostrarNotas", siSesionActiva, nota.mostrarNotas);

module.exports = router;