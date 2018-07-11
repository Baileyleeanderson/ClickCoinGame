import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  money = [];

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.money = [];
  }

  buyCoins(event){
    let user_buys = event.target;
    let total = this._httpService.buyCoins(user_buys.buy.value);
    this.money[0] = +total[0];
    this.money[1] = +total[1];
    console.log("thismoney", this.money[0], this.money[1])
  }
}