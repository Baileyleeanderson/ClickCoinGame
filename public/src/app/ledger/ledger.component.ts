import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor(
    private _httpService: HttpService
  ) { }

  ledgers= {};
  key_vals= [];
  detail_ledger= {};
  public show:boolean = false;

  ngOnInit() {
    this.show = false;
    this.findTransactions();
  }

  findTransactions(){
    this.ledgers = this._httpService.ledger();
    var keys = Object.keys(this._httpService.ledger());
    console.log('ledgers', keys)
    for (var i in keys){
      this.key_vals.push(i);
      console.log('key_vals', this.key_vals)
    }
  }
  details(event){
    var id = event.target.id;
    console.log("id", id)
    var detail = this._httpService.getDetails(id);
    this.detail_ledger = detail;
    this.show = true;
    console.log('details dict', this.details)
  }

}
