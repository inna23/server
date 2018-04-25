const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = require('../models/task');

//get tasks list
router.get('/', (req, res, next) => {
  Task
    .find()
   // .limit(2)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    }); // if error we will be here
});

// Create new task
router.post('/', (req, res, next) => {
  const task = new Task({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    user: req.body.user,
    description: req.body.description
  });
  task
    .save()
    .then(result => { // if all is ok we will be here
      console.log(result);
      res.status(201).json({
        message: "Task was created",
        task: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    }); // if error we will be here
});

//Get one task by Id
router.get('/:taskId', (req, res, next) => {
  const id = req.params.taskId;

  Task
    .findById(id)
    .then(doc => {
      if (doc){
        console.log('from data base', doc );
        res.status(200).json(doc);
      } else {
        res.status(404).json('No founded by this ID : ' + id);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//Delete one task by Id
router.delete('/:taskId', (req, res, next) => {
  const id = req.params.taskId;

  Task
    .remove({_id: id})
    .then(result =>
      res.status(200).json({
        message: `product bu id = ${id} was removed`,
        result
      })
    )
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


//Change data in data base


module.exports = router;
