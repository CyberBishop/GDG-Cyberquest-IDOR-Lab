const router = require("express").Router();

const accountController = require("../controllers/accountController");

// Get user details
router.get("/:id", accountController.getUser);

module.exports = router;
