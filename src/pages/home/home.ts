import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,  Headers } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {
    this.fetchWeatherData().then(data=>{}).catch(err=>{});
  }

  fetchWeatherData(){
    let self = this;
    return new Promise((resolve, reject) => {
      const headerDict = {
        'Content-Type': 'application/json'
      };
      const headerObj = { headers: new Headers(headerDict) };
      const baseUrl = "https://api.openweathermap.org/data/2.5/forecast?id=4898722" ;
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
