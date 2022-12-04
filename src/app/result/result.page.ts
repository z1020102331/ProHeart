/* eslint-disable eqeqeq */
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
//import { cases } from '../result/cases';
import 'src/assets/js/smtp.js';
// eslint-disable-next-line @typescript-eslint/naming-convention
declare let Email: any;

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  public check: any;

  constructor() { }

  ngOnInit() {

    const y = history.state.data;
    console.log(y);
    this.check = 0;

    /* const x = cases;
    console.log(x);

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const filter_data = cases.filter( data =>
      data.Age ==  y.age &&
      data.Sex == y.sex &&
      data.ChestPainType  ==  y.chest_pain_type &&
      data.Cholesterol == y.cholesterol &&
      data.RestingECG ==  y.resting_ECG &&
      data.RestingBP == y.resting_BP &&
      data.ExerciseAngina ==  y.exercise_Angina &&
      data.FastingBS == y.fasting_BS &&
      data.MaxHR ==  y.max_HR &&
      data.Oldpeak == y.old_Peak &&
      data.ST_Slope ==  y.st_slope
    );
    //console.log('printing filter data.......');
    console.log(filter_data);

    if(filter_data === null){
      this.check='';
    }
    else{
      //console.log('filter data=='+filter_data[0].HeartDisease);
      this.check = filter_data[0].HeartDisease;
      //console.log('in else '+this.check);

    } */

  }
  //onSubmit(f: NgForm) {
  sendEmail() {
    console.log('calling email submit action now');
    console.log(this.check);
    let emailBody: any;
    if(this.check == 1){
      emailBody = '<p>Hi there, </p><b>You have Risk of having heart disease, please visit the nearest hospital immediately!</b><br/><br/><br/> Thanks<br/>ProHeart Team';
    }else{
      emailBody = '<p>Hi there, </p><b>Congrats, you are perfectly healthy, please keep up with your heart health!</b><br/><br/><br/> Thanks<br/>ProHeart Team';
    }
    Email.send({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Host : 'smtp.elasticemail.com',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Port : '2525',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Username : 'semteam9@gmail.com',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Password : '2E339873AC58F8565B8578656BC5338E3B1A',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    // To : 'lmamilla@andrew.cmu.edu',
    To : 'Redlineracingautoclub@gmail.com',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    From : 'semteam9@gmail.com',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Subject : 'Test Email',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Body : emailBody
    }).then( message => {alert('Email Sent!');});

  }

}
