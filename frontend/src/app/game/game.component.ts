import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PlayerDataService } from '../service/player-data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() playerOne : string;
  @Input() playerTwo : string;
  playerOneWin : number = 0;
  playerTwoWin : number = 0;
  winner : string;
  diff : number = 0

  constructor(
    private playerService: PlayerDataService,
    private tostrService: ToastrService
  ){};

  ngOnInit(): void {
   
  }

  addWin(p){
    if(p == "p1"){
      this.playerOneWin = this.playerOneWin + 1;
    }else if(p == "p2"){
      this.playerTwoWin = this.playerTwoWin + 1;
    }
    if(this.playerOneWin > this.playerTwoWin){
      this.diff = this.playerOneWin - this.playerTwoWin;
      this.winner = this.playerOne;
    }else if(this.playerOneWin == this.playerTwoWin){
      this.diff = 0;
      this.winner = "Draw";
    }else{
      this.diff = this.playerTwoWin - this.playerOneWin;
      this.winner = this.playerTwo
    }
  }

  saveGame(){
    const payload = {
      "playerOne" : this.playerOne,
      "playerOneScore": this.playerOneWin,
      "playerTwo": this.playerTwo,
      "playerTwoScore": this.playerTwoWin,
      "winner": this.winner,
      "difference": this.diff
    }
    this.playerService.saveGameData(payload).subscribe(response => {
      this.tostrService.success("Game data saved!");
      window.location.reload();
    }, (err) => {
      this.tostrService.error("Something went wrong!");
    })
  }
}
