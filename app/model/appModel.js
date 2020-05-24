'use strict'

const sql = require('./db.js')

// Task model constructor
const Task = function (task) {
    this.task = task.task
    this.status = task.status
    this.created_at = new Date()
}

Task.getAllTask = function (result) {
    sql.query("Select * from tasks", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('tasks : ', res);
            result(null, res);
        }
    });
}

Task.getTaskById = function (taskId, result) {
    sql.query("select task from tasks where id = ? ", taskId, function (err, res) {
        if (err) {
            console.log('error: ', err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Task.createTask = function (newTask, result) {
    sql.query("insert into tasks set ?", newTask, function (err, res) {
        if (err) {
            console.log('error: ', err)
            result(err, null)
        } else {
            console.log(res.insertId)
            result(null, res.insertId)
        }
    })
}

Task.updatedTaskById = function (taskId, updatedTask, result) {
    sql.query("update tasks set task = ?, status = ? where id = ?", [updatedTask.task, updatedTask.status, taskId], function (err, res) {
        if (err) result(err, null)
        result(null, updatedTask)
    })
}

Task.deleteTaskById = function (taskId, result) {
    sql.query("delete from tasks where id = ?", taskId, function (err, res) {
        console.log(res)
        if (err) result(err, null)
        result(null, 1)
    })
}
module.exports = Task
