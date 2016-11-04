import {Routes, RouterModule} from "@angular/router";
import {HeroComponent} from "../hero/hero.component";
import {HeroDetailComponent} from "../hero/hero-detail/hero-detail.component";

import {TaskComponent} from "../task/task.component";
import {TaskDetailComponent} from "../task/task-detail/task-detail.component";

import {ManageComponent} from "../manage/manage.component";

export const MAIN_ROUTES: Routes = [
    { path:'hero', component: HeroComponent},
    { path:'hero/:id', component: HeroDetailComponent},
    { path:'task', component: TaskComponent},
    { path:'task/:id', component: TaskDetailComponent},
    { path:'manage', component: ManageComponent},
    { path:'', component: TaskComponent}
];

export const routes = RouterModule.forChild(MAIN_ROUTES);
