import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  coin_val = 1;
  coin_owned = 0;
  money = [];
  transactions= {};
  obj = {};
  id = -1;

  mineCoins(answer){
    if(answer == 1){
      console.log('you got it');
      this.coin_val += 1;
      this.coin_owned += 1;
      this.id += 1;
      this.transactions[this.id] = {action:"Mined", amount: 1, value: this.coin_val}
      console.log('coins updated', this.transactions);
      return;
    }
    else{
      console.log("wrong go study");
      return;
    };
  };

  buyCoins(amount){
    for(var coin = 0; coin < +amount; coin++){
      this.coin_val += 1;
      this.coin_owned += 1;
    }
    this.money[0] = this.coin_val;
    this.money[1] = this.coin_owned;
    this.id += 1;
    this.transactions[this.id] = {action:"Bought", amount: amount, value: this.coin_val};
    return this.money;
  };

  sellCoins(coins){
    if(this.coin_owned <= 1){
      this.coin_val = 1;
      this.coin_owned = 0;
      this.money[0] = this.coin_val;
      this.money[1] = this.coin_owned;
      console.log("bal too low", this.money[0], this.money[1]);
      return this.money;
    }
    else{
      for(var coin = 0; coin < +coins; coin++){
        this.coin_val -= 1;
        this.coin_owned -= 1;
      }
      this.money[0] = this.coin_val;
      this.money[1] = this.coin_owned;
      this.id += 1;
      this.transactions[this.id] = {action:"Sold", amount: coins, value: this.coin_val};
      console.log('sell ledge', this.transactions)
      return this.money;
    }
  };

  ledger(){
    console.log('service ledgers', this.transactions)
    return this.transactions;
  }

  getDetails(id){
    return this.transactions[id];
  }
};
