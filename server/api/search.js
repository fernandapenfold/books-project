const router = require("express").Router();
const axios = require("axios");
const { filterItems } = require("./utilityFunctions");
module.exports = router;

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

// POST /api/search
router.post("/", async (req, res, next) => {
  try {
    const queryString = `q=${req.body.query}&download=epub&filter=free-ebooks`;
    const { data } = await axios.get(`${BASE_URL}?${queryString}&key=${process.env.GOOGLE_API_KEY}`);
    const { totalItems, items } = data;
    res.send({ totalItems, items: filterItems(items) });
  } catch (error) {
    next(error);
  }
});