import {Routes, RouterModule} from "@angular/router";
import {AccountComponent} from "./account/account.component";
import {MainComponent} from "./main/main.component";
import {MAIN_ROUTES} from "./main/main.routes";

/**
 * Created by zhengyuanjie on 2016/9/19.
 */
const APP_ROUTES: Routes = [
    { path:'account', component: AccountComponent},
    { path:'main', component: MainComponent, children: MAIN_ROUTES},
    { path:'', component: AccountComponent, pathMatch: 'full'},
];

export const routes = RouterModule.forRoot(APP_ROUTES);
