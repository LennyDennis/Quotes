import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
      new Quote('The typewriting machine, when played with expression, is no more annoying than the piano when played by a sister or near relation.','Oscar Wilde','Lenny Dennis',new Date(2020,0,10)),
      new Quote('JavaScript is a wierd language','Henry Dru', 'Nyota Mwangi',new Date(2020,1,9)),
      new Quote('The secret to building large apps is never build large apps. Break your applications into small pieces. Then, assemble those testable, bite-sized pieces into your big application.','Nyota Mwangi', 'Lenny Dennis',new Date(2020,1,10)),
      new Quote('JavaScript is the only language that Im aware of that people feel they dont need to learn before they start using it.','DouglasCrockford', 'Nyota Mwangi',new Date(2020,1,9)),
      new Quote('To make an embarrassing admission, I like video games. That is what got me into software engineering when I was a kid. I wanted to make money so I could buy a better computer to play better video games - nothing like saving the world.','Elon Musk', 'Lenny Dennis',new Date(2020,1,10)),

    ];
    // toggleDetails(index){
    //   this.quotes[index].showDetails=!this.quotes[index].showDetails;
    // }

    completeQuote(isComplete, index){
      if (isComplete) {
        this.quotes.splice(index,1);
      }
    }

    deleteQuote(isComplete, index){
      if(isComplete){
        let toDelete = confirm(`Confirm delete ${this.quotes[index].myquote}?`)

        if(toDelete){
          this.quotes.splice(index,1)
        }
      }
    }

    addNewQuote(quote){
      quote.postTime = new Date(quote.postTime)
      this.quotes.push(quote)
    }
  constructor() { }

  ngOnInit() {
  }

}
