const router = require("express").Router();
const axios = require("axios");
module.exports = router;

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

// POST /api/search
router.post("/", async (req, res, next) => {
  try {
    const { data } = await axios.get(`${BASE_URL}?q=${req.body.query}&key=${process.env.GOOGLE_API_KEY}`);
    const { totalItems, items } = data;
    res.send({ totalItems, items });
  } catch (error) {
    next(error);
  }
});