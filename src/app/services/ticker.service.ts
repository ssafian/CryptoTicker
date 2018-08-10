import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { distinctUntilChanged, switchMap } from "rxjs/internal/operators";
import {interval, timer} from "rxjs/index";

@Injectable()
export class TickerService {

  constructor(private http: HttpClient) {

  }

  getPrice(){

    return timer(0,5000).pipe(
      switchMap(() => this.http.get('https://api.bitfinex.com/v2/candles/trade:5m:tBTCUSD/hist?start={$start}&end={$end}&limit=1'))
    );

  }

}
