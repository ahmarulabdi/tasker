'use strict'

const TaskModel = require('../model/appModel')

exports.list_all_tasks = function (req, res) {
    TaskModel.getAllTask(function (err, task) {
        console.log('controller')
        if(err) res.send(err)
        console.log('res', task)
        res.send(task)
    })
}

exports.read_a_task = function (req, res) {
    TaskModel.getTaskById(req.params.taskId, function (err, task) {
        if(err) res.send()
        res.json(task)
    })
}

exports.create_a_task = function (req, res) {
    let newTask = new TaskModel(req.body)
    console.log(newTask)
    if (typeof newTask.task === "undefined" || typeof newTask.status == "undefined") {
        res.status(400).send({
            error: true,
            message: 'Please provide task/s1'
        })
    } else{
        TaskModel.createTask(newTask, function (err, task) {
            if(err) res.send(err)
            res.json(task)
        })
    }
}

exports.update_a_task = function (req, res) {
    let updatedTask = new TaskModel(req.body)
    let taskId = req.params.taskId

    if (typeof updatedTask.task === "undefined" || typeof updatedTask.status == "undefined") {
        res.status(400).send({
            error: true,
            message: 'Please provide a task/s1'
        })
    } else if(taskId == null){
        res.status(400).send({
            error: true,
            message: 'Task not found'
        })
    } else {
        TaskModel.updatedTaskById(taskId, updatedTask, function (err, task) {
            if(err) res.send(err)
            res.json(task)
        })
    }

}

exports.delete_a_task = function (req, res) {
    TaskModel.deleteTaskById(req.params.taskId, function (err, isDeleted) {
        if(err) res.send(err)
        if(isDeleted) res.json({'message': 'successfully deleted'})
    })
}
