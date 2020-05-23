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
