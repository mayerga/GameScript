const {Router}  = require ('express');
const index     = require('../controllers/index-controller');
const router    = Router();

router.get("/", index.renderIndex);
router.get("/contact", index.renderContact);



// router.get("/", (req, res) => {
//     res.sendFile(process.cwd() + "/public/html/1_index.html");
// });
// router.get("/0_head.html", (req, res) => {
//     res.sendFile(process.cwd() + "/public/html/0_head.html");
// });
// router.get("/0_header.html", (req, res) => {
//     res.sendFile(process.cwd() + "/public/html/0_header.html");
// });
// router.get("/2_lobby.html", (req, res) => {
//     res.sendFile(process.cwd() + "/public/html/2_lobby.html");
// });
// router.get("/3_playroom.html", (req, res) => {
//     res.sendFile(process.cwd() + "/public/html/3_playroom.html");
// });
// router.get("/4_contact.html", (req, res) => {
//     res.sendFile(process.cwd() + "/public/html/4_contact.html");
// });
// router.get("/9_footer.html", (req, res) => {
//     res.sendFile(process.cwd() + "/public/html/9_footer.html");
// });
    
module.exports = router;