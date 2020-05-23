'use strict'

const connection = require('./db.js')

// Task model constructor
const Task = function (task) {
    this.task = task.task
    this.status = task.status
    this.created_at = new Date()
}

Task.getAllTask = function (result) {
    connection.query("Select * from tasks", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log('tasks : ', res);
            result(null, res);
        }
    });
}

Task.getTaskById = function (taskId, result) {
    connection.query("select task from tasks where id = ? ", taskId, function (err, res) {
        if(err) {
            console.log('error: ', err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

module.exports = Task
