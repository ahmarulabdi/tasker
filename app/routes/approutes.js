module.exports = function (app) {
    const taskController = require('../controller/appController')

    app.route('/tasks')
        .get(taskController.list_all_tasks)
}
