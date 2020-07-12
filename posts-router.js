const express = require('express');
const router = express.Router();
const Posts = require('./data/db');

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

router.get('/:id', (req, res) => {
    Posts.findById(req.params.id)
    .then(post => {
        if(post) {
        res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Post not found'})
        }
    })
    .catch(error => {
        concole.log("Error getting a post", error);
        res.status(500).json({
            message: "Error Retrieving a post",
        });
    });
});

router.get('/:id/comments', (req, res) => {
    Posts.findCommentById(req.params.id)
    .then(post => {
        if(post) {
        res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Post not found'})
        }
    })
    .catch(error => {
        concole.log("Error getting a post", error);
        res.status(500).json({
            message: "Error Retrieving a post",
        });
    });
});

router.post('/', (req, res) => {
    Posts.insert(req.body)
    .then(post => {
        res.status(201).json(post);
    })
    .catch( error => {
        console.log("New post error", error);
        res.status(500).json({
            message: 'Error adding a post'
        });
    });
});

router.post('/:id/comments', (req, res) => {
    Posts.insertComment(req.body)
    .then(post => {
        res.status(201).json(post);
    })
    .catch( error => {
        console.log("New post error", error);
        res.status(500).json({
            message: 'Error adding a post'
        });
    });
});

router.delete('/:id', (req, res) => {
    Posts.remove(req.params.id)
    .then(count => {
        if(count > 0) {
            res.status(200).json({ message: 'Post Deleted'});
        } else {
            res.status(404).json({ message: 'Could not find the post'});
        }
    })
    .catch(error => {
        console.log('Error deleting a post', error);
        res.status(500).json({
            message: 'Error removing the post'
        });
    });
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    Posts.update(req.params.id, changes)
    .then(post => {
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'the postcould not be found'});
        }
    })
    .catch(error => {
        console.log('Error updating a post', error);
        res.status(500).json({
            message: 'Error updating the post',
        });
    });
});


module.exports = router;