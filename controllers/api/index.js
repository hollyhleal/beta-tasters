const router = require("express").Router();

const betaRoutes = require("./TasterRoutes");
const MangeRoutes = require("./ManagementRoute");
const contactRoutes = require("./contactRoutes");

router.use("/betalogin", betaRoutes);
router.use("/Mangelogin", MangeRoutes);
router.use("/contact", contactRoutes);

module.exports = router;
