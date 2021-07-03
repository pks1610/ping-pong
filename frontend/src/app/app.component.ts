import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerOneName: string;
  playerTwoName: string;

  onSubmit(f: NgForm) {
    let players = f.value; 
    this.playerOneName = players?.playerOne;
    this.playerTwoName = players?.playerTwo;
  }
}
