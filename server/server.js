//Student Number: u25004141
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3001;
const UPLOAD_DIR = path.join(__dirname, "uploads");

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(UPLOAD_DIR));

if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR);
}

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

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_DIR),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${unique}${ext}`);
    },
});

const upload = multer({ storage });

app.get("/api/posts", (req, res) => {
    res.json(posts);
});

app.post("/api/posts", (req, res) => {
    const { username, caption } = req.body;

    if (!username || !caption || !req.file) {
        return res.status(400).json({
            error: "Username, caption and image are required."
        });
    }

    const newPost = {
        id: Date.now(),
        username,
        caption,
        image: req.file.filename
    }
    posts.push(newPost);    
    res.status(201).json(newPost);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});