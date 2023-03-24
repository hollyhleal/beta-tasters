const router = require("express").Router();
const menuItemsRoute = require("./menu-items");
const ratingsRoute = require("./ratings");
const betaRoutes = require("./TasterRoutes");
const ManageRoutes = require("./ManagementRoute");
const contactRoutes = require("./contactRoutes");

router.use("/betalogin", betaRoutes);
router.use("/Managelogin", ManageRoutes);
router.use("/contact", contactRoutes);
router.use("/menu-items", menuItemsRoute);
router.use("/ratings", ratingsRoute);

module.exports = router;
