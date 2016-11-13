"use strict";
var Task = (function () {
    function Task(title, description, payment, state, id) {
        if (state === void 0) { state = 'open'; }
        this.title = title;
        this.description = description;
        this.payment = payment;
        this.state = state;
        this.id = id;
        this.heroList = {};
    }
    Task.prototype.addNewHero = function (h) {
        this.heroList[h.id] = h;
    };
    Task.prototype.deleteHero = function (h) {
        console.log(h.id);
        delete this.heroList[h.id];
    };
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.model.js.map