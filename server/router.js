'use strict';

const express = require('express');
const low = require('lowdb');
const storage = require('lowdb/file-sync');
const uuid = require('node-uuid');


//===========================
//  DATABASE
//---------------------------
const db = low(__dirname + '/db.json', {storage});


//===========================
//  ROUTER
//---------------------------
const router = new express.Router();
module.exports = router;


router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Accept, Content-Type, Origin, X-Requested-With');
  next();
});


router.post('/tasks', (req, res) => {
  let data = req.body;
  data.id = uuid.v4();
  let task = db('tasks').chain().push(data).last().value();
  res.status(200).json(task);
});


router.get('/tasks', (req, res) => {
  res.status(200).json(db('tasks'));
});


router.get('/tasks/:id', (req, res) => {
  res.status(200);
});


router.put('/tasks/:id', (req, res) => {
  let id = req.params.id;
  let task = db('tasks').chain().find({id}).assign(req.body).value();
  res.status(200).json(task);
});


router.delete('/tasks/:id', (req, res) => {
  let id = req.params.id;
  let task = db('tasks').find({id});
  db('tasks').remove({id});
  res.status(200).json(task);
});
