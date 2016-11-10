import {Hero} from "./hero.model"
import {Injectable, OnInit, OnDestroy} from "@angular/core"
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs";

@Injectable()
export class HeroService{
    public heroList:Array<Hero> = [];
    private subscription:Subscription = new Subscription();

    private dbURL = "https://test2-25905.firebaseio.com/heros.json";
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http:Http){
        console.log("Hero service start");
        this.subscription = this.getHerosHttp().subscribe((data)=>{
            for(var i in data){
                data[i].id = i;
                this.heroList.push(new Hero(data[i].name, data[i].age, data[i].money, data[i].imgUrl, data[i].address, data[i].id));
                console.log(this.heroList[0].taskList);
            }
        },(err)=>{
            console.error("Get Heros Err: " + err);
        });
    }

    getHerosHttp():Observable<any>{
        return this.http.get(this.dbURL,this.options).map((res: Response) => {
            let body = res.json();
            return body || { };
        });
    }

    getHeros():Array<Hero> {
        return this.heroList;
    }

    getHeroById(id:string):Hero{
        for(let h of this.heroList){
            if(id == h.id){
                return h;
            }
        }
        return null;
    }

    createHero(newHero:Hero):Observable<any>{
        return this.http.post(this.dbURL,JSON.stringify(newHero),this.options).map((res: Response) => {
            let body = res.json();
            return body || { };
        });
    }
}
