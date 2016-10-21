import {Component, OnInit, Output,OnDestroy, EventEmitter} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl, AbstractControl} from '@angular/forms';

@Component({
  selector: 'my-hero-form',
  templateUrl: './app/hero-form/hero-form.html',
  styleUrls:['./app/hero-form/hero-form.css']
})
export class HeroFormComponent implements OnInit{
    private myForm:FormGroup;
    @Output() onNewHero:EventEmitter<Hero> = new EventEmitter<Hero>();
    private errors:{[key:string]:Array<any>} = {};
    private errorMsgs:{[key:string]:string} = {};

    constructor(private formBuilder:FormBuilder){
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
        console.log(this.myForm);
    }

    onSave(ev){
        console.log(this.myForm.value);
        this.onNewHero.emit(new Hero(this.myForm.value.name,
            this.myForm.value.age,
            +this.myForm.value.money,
            this.myForm.value.imgUrl
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

    exampleValidator(control:AbstractControl){
        if(control.value == 'example'){
            return {'example':true}
        }
        return null
    }

    asyncValidator(control:AbstractControl){
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

class Hero{
    constructor(public name:string, public age:number, public money:number, public imgUrl:string){};
}
