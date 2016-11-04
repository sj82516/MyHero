import {Component, OnInit,OnDestroy, EventEmitter} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl, AbstractControl} from '@angular/forms';
import { Hero } from "../../shared/hero.model";
import { HeroService }  from '../../shared/hero.service';

@Component({
  selector: 'my-hero-form',
  templateUrl: './app/hero/hero-form/hero-form.html',
  styleUrls:['./app/hero/hero-form/hero-form.css']
})
export class HeroFormComponent implements OnInit{
    private myForm:FormGroup;
    private errors:{[key:string]:Array<any>} = {};
    private errorMsgs:{[key:string]:string} = {};

    constructor(private formBuilder:FormBuilder, private heroService:HeroService){
    }

    ngOnInit(){
        this.myForm = this.formBuilder.group({
            'name':['Hero',[Validators.required, Validators.minLength(4), this.exampleValidator]],
            'age':['',[Validators.required, Validators.pattern('^[0-9]{1,3}$')]],
            'money':['',[Validators.required]],
            'imgUrl':['', [Validators.required]],
            'address':this.formBuilder.group({
                'country':['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')],[this.asyncValidator.bind(this)]],
                'city':['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]]
            })
        })
        this.registerInputCheck();
    }

    onSave(ev){
        this.heroService.createHero(new Hero(this.myForm.value.name,
            this.myForm.value.age,
            +this.myForm.value.money,
            this.myForm.value.imgUrl,
            this.myForm.value.address
        ))
    }

    //配置錯誤訊息
    registerInputCheck(){
        this.errors['name'] = [
            {key:'required', msg:'* name required!'},
            {key:'minlength', msg:'* name is too short!'},
            {key:'example', msg:'* name is example!'}
        ];
        this.errors['age'] = [
            {key:'required', msg:'* age required!'},
            {key:'pattern', msg:'* age format is invalid!'}
        ];
        this.errors['money'] = [
            {key:'required', msg:'* money required!'}
        ];
        this.errors['imgUrl'] = [
            {key:'required', msg:'* imgUrl required!'}
        ];
        this.errors['country'] = [
            {key:'required', msg:'* country required!'},
            {key:'pattern', msg:'* country format is invalid!'},
            {key:'example', msg:'* country is example!'}
        ];
        this.errors['city'] = [
            {key:'required', msg:'* city required!'},
            {key:'pattern', msg:'* city format is invalid!'}
        ];
    }

    handleInputError(control:AbstractControl, outputElm){
        if(!control.valid && this.errors[outputElm]){
            for(let err of this.errors[outputElm]){
               if(control.hasError(err.key)){
                   this.errorMsgs[outputElm] = err.msg;
               }
            }
        }
    }

    exampleValidator(control){
        if(control.value == 'example'){
            return {'example':true}
        }
        return null
    }

    asyncValidator(control){
        let that = this;
        const promise =  new Promise<any>((resolve, reject)=>{
            let v = control.value;
            setTimeout(()=>{
                if(v == 'example'){
                    control.setErrors({'example':'example'});
                    that.handleInputError(control,'country')
                    resolve({'example':true})
                }else{
                    resolve(null);
                }
            },1500)
        })
        return promise;
    }
}
