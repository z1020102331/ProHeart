import { Component, OnInit } from '@angular/core';
import {Users, tmpGlobalUsers} from "../model/user";
import {ToastService} from "../service/ToastService";

@Component({
  selector: 'app-regist',
  templateUrl: './regist.page.html',
  styleUrls: ['./regist.page.scss'],
})
export class RegistPage implements OnInit {
  user:Users;
  constructor(private toastservice:ToastService) {
    this.user=new Users();
  }

  ngOnInit() {
  }
  save(){
    // local check
    console.log("id:"+this.user.username+",pass:"+this.user.pass+"!");
    if(this.user.username === undefined || this.user.pass === undefined){
      this.toastservice.showErrrorToast("Registration Failed. Must Input the Username and Password.");
      return;
    }
    if(this.user.pass.length < 8){
      this.toastservice.showErrrorToast("Registration Failed. The Password Needs at Least 8 Characters. ");
      return;
    }
    var upper_case, low_case, special_case = false;
    for(var i=0; i < this.user.pass.length; i ++){
      var c = this.user.pass.charAt(i);
      if(c >= 'a' && c <= 'z'){
        low_case = true;
      }else if(c >= 'A' && c <= 'Z'){
        upper_case = true;
      }else if(c >= '0' && c <= '9'){
        // pass
      }else{
        special_case = true;
      }
    }
    if(!upper_case || !low_case || !special_case){
      this.toastservice.showErrrorToast("Registration Failed. Password Must Contain at Least an Uppercase, Lowercase, and Special Character.");
      return;
    }

    // check email

    let d = this.user.email.length - 4
    if(d >= 0 && (this.user.email.lastIndexOf(".com") == d || this.user.email.lastIndexOf(".edu") == d)){
      // jump to login
      tmpGlobalUsers.push(this.user);
      this.toastservice.showSuccessToast("Registration successful");
    }else{
      this.toastservice.showErrrorToast("Registration Failed. Email Must End with .com or .edu");
    }
  }

}