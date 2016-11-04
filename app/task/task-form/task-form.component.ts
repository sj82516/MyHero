import {Component, OnInit,OnDestroy, EventEmitter} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl, AbstractControl} from '@angular/forms';
import { Task } from "../../shared/task.model";
import { TaskService }  from '../../shared/task.service';

@Component({
  selector: 'my-task-form',
  templateUrl: './app/task/task-form/task-form.html',
  styleUrls:['./app/task/task-form/task-form.css']
})
export class TaskFormComponent implements OnInit{
    private myForm:FormGroup;
    private errors:{[key:string]:Array<any>} = {};
    private errorMsgs:{[key:string]:string} = {};

    constructor(private formBuilder:FormBuilder, private taskService:TaskService){}

    ngOnInit(){
        this.myForm = this.formBuilder.group({
            'title':['Task',[Validators.required, Validators.minLength(4), this.exampleValidator]],
            'description':['',[Validators.required, Validators.maxLength(40)]],
            'payment':['',[Validators.required]]
        })
        this.registerInputCheck();
    }

    onSave(ev){
        this.taskService.createTask(new Task(this.myForm.value.title,
            this.myForm.value.description,
            +this.myForm.value.payment
        ))
    }

    //配置錯誤訊息
    registerInputCheck(){
        this.errors['title'] = [
            {key:'required', msg:'* name required!'},
            {key:'minlength', msg:'* name is too short!'},
            {key:'example', msg:'* name is example!'}
        ];
        this.errors['description'] = [
            {key:'required', msg:'* description required!'},
            {key:'maxlength', msg:'* description is to long!'}
        ];
        this.errors['payment'] = [
            {key:'required', msg:'* payment required!'}
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
