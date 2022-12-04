/* eslint-disable @typescript-eslint/naming-convention,eqeqeq */
import { Component, OnInit , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
import axios from 'axios';
SwiperCore.use([Pagination]);


@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  public Current_condition: any= {name:'' , age:null , sex:'' ,  chest_pain_type:'' ,
                                resting_BP :null , cholesterol:null , fasting_BS:null ,
                                resting_ECG: null , max_HR:null , exercise_Angina:'' ,
                                old_Peak:null , st_slope:'' };

  gender = {
    M: 1,
    F: 0
  };

  chestPainType = {
    TA: 0,
    ATA: 1,
    NAP: 2,
    ASY : 3
  };

  exerciseAngina = {
    Y: 1,
    N: 0
  };

  fastingBs = {
    1: 1,
    0: 0
  };

  restEcg = {
    Normal: 0,
    ST: 1,
    LVH: 2
  };

  slp = {
    Up: 0,
    Flat: 1,
    Down: 2
  };
  public allow = true;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public show_prev = true;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public show_next = false;

  config: SwiperOptions  = {
    noSwiping : true,
    noSwipingClass: 'mySwiper',
    simulateTouch : false,
  };



  constructor( public route: Router ) {




  }

  ngOnInit() {

  }

  slidePrev(x){
    this.swiper.swiperRef.slidePrev(100);
    this.allow = true;
    this.onSlideChange(x);
  }
  slideNext(x){
    this.swiper.swiperRef.slideNext(100);
    this.allow = true;
    this.onSlideChange(x);
    console.log(this.allow);
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  get_condition($event){
      this.allow = false;
      console.log($event);
      console.log(this.allow);
  }
  result(){
    const payload = this.Current_condition;
    console.log(payload);
    this.predict().then(r => {
      console.log(r);
    });
    this.route.navigate(['result'] , { state :{data:this.Current_condition}});
  }


  onSlideChange(swiper){
   console.log('*** mySwiper.realIndex', swiper[0].realIndex);
   console.log(swiper[0].activeIndex);
   const x = 0 ;
   const y = 3 ;

   if(swiper[0].activeIndex === x){
    this.show_prev = true;
    console.log('3');
   }
   else if(swiper[0].activeIndex === y ){
    this.show_next = true;
   }
   else{
    this.show_prev = false;
    this.show_next = false;
   }

  }


  onSwiper(swiper) {
    console.log(swiper);
  }

  async predict() {
    const payload = this.Current_condition;
    try {
      await axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/predict',
        data: {
          age: payload.age,
          sex: this.gender[payload.sex],
          chest_pain_type: this.chestPainType[payload.chest_pain_type],
          resting_BP: payload.resting_BP,
          cholesterol: payload.cholesterol,
          fasting_BS: this.fastingBs[payload.fasting_BS],
          resting_ECG: this.restEcg[payload.resting_ECG],
          max_HR: payload.max_HR,
          exercise_Angina: this.exerciseAngina[payload.exercise_Angina],
          old_Peak: payload.old_Peak,
          thall: this.slp[payload.st_slope],
          output: 1
        }
      }).then( response => {
        // handle success
        console.log(response);
        console.log(response.data);
        });
    }
    catch (error) {
    console.error(error);
    }
  }
}
