"use strict";
var Hero = (function () {
    function Hero(name, age, money, imgUrl, address, id) {
        this.name = name;
        this.age = age;
        this.money = money;
        this.imgUrl = imgUrl;
        this.address = address;
        this.id = id;
        //宣告TaskList，以Map形式
        this.taskList = {};
    }
    ;
    Hero.prototype.addNewTask = function (t) {
        this.taskList[t.id] = t;
    };
    Hero.prototype.deleteTask = function (t) {
        delete this.taskList[t.id];
    };
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.model.js.map