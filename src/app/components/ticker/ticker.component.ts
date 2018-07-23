import { Component, OnInit } from '@angular/core';
import {TickerService} from "../../services/ticker.service";

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit {

  prices: any;
  currentPrice: number;
  savePrice: number;

  constructor(private tick: TickerService) { }

  ngOnInit() {

   this.getPrices();

    setInterval(() => {
      this.getPrices();
    }, 5000);

  }

  getPrices(){
    this.tick.getPrice().subscribe(prices => {
      this.currentPrice = prices[0][2];
      console.log(prices[0]);
      console.log('Current Price:' + this.currentPrice);
      this.prices = prices;
    });

    this.savePrice = this.currentPrice;
  }


}
