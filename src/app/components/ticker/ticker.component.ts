import { Component, OnInit } from '@angular/core';
import {TickerService} from "../../services/ticker.service";

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit {

  prices: any;

  constructor(private tick: TickerService) { }

  ngOnInit() {

   this.getBtc();

    setInterval(() => {
      this.getBtc();
    }, 5000);

  }

  getBtc(){
    this.tick.getPrice().subscribe(posts => {
      console.log(posts[0]);
      this.prices = posts;
    });
  }


}
