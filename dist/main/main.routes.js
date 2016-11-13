"use strict";
var router_1 = require("@angular/router");
var main_component_1 = require("./main.component");
var hero_component_1 = require("../hero/hero.component");
var hero_detail_component_1 = require("../hero/hero-detail/hero-detail.component");
var task_component_1 = require("../task/task.component");
var task_detail_component_1 = require("../task/task-detail/task-detail.component");
var manage_component_1 = require("../manage/manage.component");
var user_service_1 = require("../shared/user.service");
var MAIN_ROUTES = [
    { path: '', component: main_component_1.MainComponent, children: [
            { path: '', component: task_component_1.TaskComponent },
            { path: 'hero', component: hero_component_1.HeroComponent, canDeactivate: [user_service_1.UserCanDeactivateGuard] },
            { path: 'hero/detail', component: hero_detail_component_1.HeroDetailComponent },
            { path: 'task', component: task_component_1.TaskComponent, canDeactivate: [user_service_1.UserCanDeactivateGuard] },
            { path: 'task/:id', component: task_detail_component_1.TaskDetailComponent },
            { path: 'manage', component: manage_component_1.ManageComponent }
        ] }
];
exports.routing = router_1.RouterModule.forChild(MAIN_ROUTES);
//# sourceMappingURL=main.routes.js.map