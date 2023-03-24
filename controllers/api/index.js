const router = require("express").Router();

const betaRoutes = require("./betalogin-routes");

const MangeRoutes = require("./Mangelogin-routes");

router.use("/betalogin", betaRoutes);

router.use("/Mangelogin", MangeRoutes);

module.exports = router;
