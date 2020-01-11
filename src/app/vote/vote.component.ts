import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  votes : number=0;

  upvoteButton(){
    this.votes++;
  }
  downvoteButton(){
    this.votes--;
  }

  constructor() { }

  ngOnInit() {
  }

}
