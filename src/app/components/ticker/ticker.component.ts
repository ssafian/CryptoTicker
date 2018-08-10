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

  }

  getPrices(){

    this.savePrice = 0;
    this.tick.getPrice().subscribe(prices => {
      this.currentPrice = prices[0][2];
      this.prices = prices;
      this.savePrice = this.currentPrice;
    });

  }

}
