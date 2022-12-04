import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Users, tmpGlobalUsers} from "../model/user";
import {ToastService} from "../service/ToastService";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:Users;
  constructor(private toastservice:ToastService, private navCtrl : NavController) {
    this.user=new Users();
  }
  ngOnInit() {
  }
  save(){
    // local check
    console.log(tmpGlobalUsers);
    if(this.user.username === undefined || this.user.pass === undefined){
      this.toastservice.showErrrorToast("login fail, username or password is empty");
      return;
    }
    for(var i=0; i < tmpGlobalUsers.length; i ++){
      var regist_user = tmpGlobalUsers[i];
      if(regist_user.username == this.user.username && regist_user.pass == this.user.pass){
        // jump to login
        this.toastservice.showSuccessToast("login success");
        this.navCtrl.navigateForward('/main');
        return;
      }
    }
    this.toastservice.showErrrorToast("Username or password is incorrect");
  }
}
