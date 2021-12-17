const {Router}  = require ('express');
const user      = require('../controllers/user-controller');
const router    = Router();

router.get("/lobby", user.renderLobby);
router.get("/playroom", user.renderPlayroom);

//LOGIN
router.post("/user/signin", user.userLogin);

//CRUD
router.post('/user/register', user.userPost);
router.get('/user/all', user.userGetAll);
router.put('/user/:id', user.userUpdate);
router.delete('/user/:id', user.userDelete);

module.exports = router;