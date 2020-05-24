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
