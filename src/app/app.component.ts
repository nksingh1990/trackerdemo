import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';

// const config = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
//   databaseURL: 'https://YOUR_PROJECT_ID.firebaseio.com/',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'gs://YOUR_PROJECT_ID.appspot.com',
// };
var config = {
  apiKey: "AIzaSyBuw2i5g30PW-taJ2sDgVAQuDEd6hbWjaA",
  authDomain: "locationtracking-c7af9.firebaseapp.com",
  databaseURL: "https://locationtracking-c7af9.firebaseio.com",
  projectId: "locationtracking-c7af9",
  storageBucket: "",
  messagingSenderId: "278910658566"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
