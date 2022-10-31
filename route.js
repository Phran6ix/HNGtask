const { Router } = require("express");
const output = require("./output.json");
const router = Router();

router.get("/gethnginfo", (req, res, next) => {
  res.status(200).json({
    output,
  });
});
module.exports = router;
