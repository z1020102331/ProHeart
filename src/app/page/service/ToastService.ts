import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
    //ToastController
    constructor(private toastController: ToastController) { }
    
    public async showSuccessToast(msg:string){
        const toast = await this.toastController.create({
            message: msg,
            duration: 4000,
            color:"success",
            position:"middle"
        });
        toast.present();
    }

    public async showWarningToast(msg:string){
        const toast = await this.toastController.create({
            message: msg,
            duration: 4000,
            color:"warning",
            position:"middle"
        });
        toast.present();
    }

    public async showErrrorToast(msg:string){
        const toast = await this.toastController.create({
            message: msg,
            duration: 4000,
            color:"danger",
            position:"middle"
        });
        toast.present();
    }
}