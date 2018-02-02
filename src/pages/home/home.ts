import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weatherData:any;

  constructor(public storage: Storage, public navCtrl: NavController, public http: Http) {
    
  }

  ionViewDidLoad() {
    let self = this;

    // check local storage for existing
    self.storage.get('data').then((data:any)=>{
      if(data){ 
        self.weatherData = JSON.parse(data._body)['list'];
      }else{
        // fetch weather data from API
        self.fetchWeatherData().then((res:any)=>{
          self.weatherData = JSON.parse(res._body)['list'];
          self.storage.set('data', res);
        }).catch(err=>{});
      }
    });
  }

  // function to get weather data from Openweathermap
  fetchWeatherData(){
    let self = this;
    return new Promise((resolve, reject) => {
      const headerDict = {
        'Content-Type': 'application/json'
      };
      const headerObj = { headers: new Headers(headerDict) };
      const baseUrl = "https://api.openweathermap.org/data/2.5/forecast?id=4898722&APPID={YOUR_API_KEY}" ;
      self.http.get(baseUrl, headerObj).subscribe(
        function(response){
          resolve(response);
        },
        function(error){
           reject(error);
        }
      );

    });
  }

}
