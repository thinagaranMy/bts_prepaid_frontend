export class Customer {
  name: string;
  id: string;
  balance: string;
  
  constructor(data: any = {}) {
        this.name = (data.name) ? data.name : '';
        this.id = (data.id) ? data.id : '';
        this.balance = (data.balance)? data.balance : '';
    }
}
