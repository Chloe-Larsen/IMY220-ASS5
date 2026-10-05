const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let posts = [
    {
        id: 1,
        username: "@sarah",
        caption: "Studying React today!",
        image: null
    },
    {
        id: 2,
        username: "@john",
        caption: "Finished my practical.",
        image: null
    }
];

app.get("/api/posts", (req, res) => {
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});