import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asti-mobile-test';
  getBackground(){
    return "url(./assets/background.png)"
  }
}


//Author: Rubén Iglesias