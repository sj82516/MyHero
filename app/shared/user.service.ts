import {CanLoad, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";


export interface User{
    account:string;
    password:string;
}

export class UserService{
    public loginUser:User;
    constructor(){}
}

@Injectable()
export class UserCanLoadGuard implements CanLoad{
    constructor(private userService:UserService, private router:Router){}
    canLoad(route: Route):Observable<boolean>|boolean{
        if (this.userService.loginUser) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    }
}

export interface ComponentCanDeactivate {
    canDeactivate():boolean | Observable<boolean>;
}

@Injectable()
export class UserCanDeactivateGuard implements CanDeactivate<any>{
    canDeactivate(component: ComponentCanDeactivate):boolean | Observable<boolean>{
        return component.canDeactivate?component.canDeactivate():true;
    }
}
