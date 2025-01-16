import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let globalPosts = {};
let majorGlobalPosts = [];

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/Story-of-my-life", (req, res) => {
    res.render("Story-of-my-life.ejs");
});

app.get("/Birthday-and-birthplace", (req, res) => {
    res.render("Birthday-and-birthplace.ejs");
});

app.get("/Growing-up", (req, res) => {
    res.render("Growing-up.ejs");
});

app.get("/Making-friends", (req, res) => {
    res.render("Making-friends.ejs");
});  

app.get("/Choosing-a-path", (req, res) => {
    res.render("Choosing-a-path.ejs");
});

app.get("/Finding-peace", (req, res) => {
    res.render("Finding-peace.ejs");
});

app.get("/Seeking-love", (req, res) => {
    res.render("Seeking-love.ejs");
});

app.get("/Birthing-life", (req, res) => {
    res.render("Birthing-life.ejs");
});

app.get("/Knowing-God-and-truth", (req, res) => {
    res.render("Knowing-God-and-truth.ejs");
});  

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.get("/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/submitNew", (req, res) => {
    const newPost = {
        title: req.body.title,
        content: req.body.content
    };
    majorGlobalPosts.push(newPost);
    globalPosts.title = newPost.title;
    globalPosts.content = newPost.content;
    res.render("index.ejs", { indexTitle: globalPosts.title, indexContent: globalPosts.content });
});

app.get("/edit", (req, res) => {
    res.render("edit.ejs", { editTitle: globalPosts.title, editContent: globalPosts.content });
});

app.post("/submitEdit", (req, res) => {
    const editedPost = {
        title: req.body.title,
        content: req.body.content
    };
    globalPosts.title = editedPost.title;
    globalPosts.content = editedPost.content;
    res.render("index.ejs", { indexTitle: globalPosts.title, indexContent: globalPosts.content });
});

app.post("/delete", (req, res) => {
    globalPosts.content = null;
    globalPosts.title = null;
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
