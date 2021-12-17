const {Router} = require ('express');
const { renderLobby, renderPlayroom } = require('../controllers/user-controller');
const router = Router();

router.get("/lobby", renderLobby);
router.get("/playroom", renderPlayroom);

module.exports = router;