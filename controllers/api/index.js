const router = require("express").Router();
const menuItemsRoute = require("./menu-items");
const ratingsRoute = require("./ratings");
//const betaRoutes = require('./betalogin-routes');
//const ManageRoutes = require('./Managelogin-routes');

//router.use("/betalogin", betaRoutes);
//router.use("/Managelogin", ManageRoutes);
router.use("/menu-items", menuItemsRoute);
router.use("/ratings", ratingsRoute);

module.exports = router;
