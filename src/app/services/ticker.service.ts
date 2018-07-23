import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TickerService {

  constructor(private http: HttpClient) {

  }

  getPrice(){

    return this.http.get('https://api.bitfinex.com/v2/candles/trade:5m:tBTCUSD/hist?start={$start}&end={$end}&limit=1');

  }

}
