"use strict";
var router_1 = require("@angular/router");
var account_component_1 = require("./account/account.component");
var user_service_1 = require("./shared/user.service");
/**
 * Created by zhengyuanjie on 2016/9/19.
 */
var APP_ROUTES = [
    { path: '', component: account_component_1.AccountComponent },
    { path: 'account', component: account_component_1.AccountComponent },
    { path: 'main', loadChildren: 'app/main/main.module#MainModule', canLoad: [user_service_1.UserCanLoadGuard] },
    { path: '**', component: account_component_1.AccountComponent },
];
exports.routes = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map