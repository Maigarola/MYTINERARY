const express = require('express');
const router = express.Router();

router.get("/test", (req, res) => {
    res.send({ msg: "Cities test route." });
});

router.get("/amaia", (req, res) => {
    res.send({ msg: "Estas es mi nueva ruta" });
});
module.exports = router;