const express = require('express');
const router = express.Router();
const Posts = require('./data/seeds/01-posts');

router.get('/', (req, res) => {
    Posts.find(req.query)
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(error => {
        concole.log("Error getting posts", error);
        res.status(500).json({
            message: "Error Retrieving posts",
        });
    });
});

router.get('/', (req, res) => {
    Posts.find(req.query)
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(error => {
        concole.log("Error getting posts", error);
        res.status(500).json({
            message: "Error Retrieving posts",
        });
    });
});

module.exports = router;