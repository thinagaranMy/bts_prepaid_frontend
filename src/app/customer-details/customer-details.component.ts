import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  public customer: Customer;
  public topUpView: Boolean;
  public customerDetailsView: Boolean;
  public purchaseView: Boolean;
  private userId : string;
  private domainIP : string;
  private topUpValue: number;

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.topUpView = false;
    this.customerDetailsView = true;
    this.purchaseView = false;
    this.userId = "1";
    this.domainIP = "http://localhost:8090/";
     this.initCustomer();
     this.customer = new Customer({ name: "", id: "", balance: ""});

  }

  private initCustomer(): void {
    this.http.get<Customer>(this.domainIP+'customer/'+ this.userId)
      .subscribe(data => {
        this.customer = data;
        this.customer = new Customer({ name: data.name, id: data.id, balance: data.balance});
    });
    
  }
  
  public topUp(): void {
    console.log('button clicked');
    
    this.topUpView = true;
    this.purchaseView = false;
    this.customerDetailsView = false;
  }

  public purchase(): void {
    console.log('purchase clicked');
    this.purchaseView = true;
    this.topUpView = false;
    this.customerDetailsView = false;
  }

  public cancelPurchaseView(): void{
    this.purchaseView = false;
    this.customerDetailsView = true;
  }
  public cancelTopUpView() : void{
    this.topUpView = false;
    this.customerDetailsView = true;
  }

  public topUpRestCall() : void{
    console.log('calling topup value'+ this.topUpValue);
    this.http.put<Customer>(this.domainIP+'customerTopUp/'+ this.userId+'/'+this.topUpValue,{}).
          subscribe(data => {
            this.customer = data;
            this.customer = new Customer({ name: data.name, id: data.id, balance: data.balance});
            console.log(this.customer.balance)
        });
    }
}
