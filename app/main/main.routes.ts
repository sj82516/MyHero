import {Routes, RouterModule} from "@angular/router";

import {MainComponent} from "./main.component";
import {HeroComponent} from "../hero/hero.component";
import {HeroDetailComponent} from "../hero/hero-detail/hero-detail.component";
import {TaskComponent} from "../task/task.component";
import {TaskDetailComponent} from "../task/task-detail/task-detail.component";
import {ManageComponent} from "../manage/manage.component";
import {UserCanDeactivateGuard} from "../shared/user.service";

const MAIN_ROUTES: Routes = [
    { path:'', component: MainComponent, children:[
        { path:'', component: TaskComponent},
        { path:'hero', component: HeroComponent, canDeactivate:[UserCanDeactivateGuard]},
        { path:'hero/detail', component: HeroDetailComponent},
        { path:'task', component: TaskComponent, canDeactivate:[UserCanDeactivateGuard]},
        { path:'task/:id', component: TaskDetailComponent},
        { path:'manage', component: ManageComponent}
    ]}
];

export const routing = RouterModule.forChild(MAIN_ROUTES);
