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
