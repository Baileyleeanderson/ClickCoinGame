import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  money = [];

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.money = [];
  }

  sellCoins(event){
    let user_sells = event.target;
    let sold = this._httpService.sellCoins(user_sells.sell.value);
    this.money[0] = +sold[0];
    this.money[1] = +sold[1];
    console.log("thismoney", this.money[0], this.money[1])
  }
}
