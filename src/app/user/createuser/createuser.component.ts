import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User, UserAccount } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  accountData : UserAccount[] = [];

  error = new Subject<string>();
  
  constructor(private customerService : UserService) { }

  ngOnInit(): void {
  }

  customer = {
    customerName: '',
    Gender : '',
    customerAddress: '',
    customerPhone: '',
    customerEmailId:'',
    password : '',
    customerStatus: '',
    customerId:'',
    userType:'',
  };

  customerAccount = {
    accountnumber : 0,
    accounttype:'',
    balance: 0.0,
    accountstatus : '',
  };

  
  submitted = false;
  
  min : number = 500000; // Customer Id Min
  max : number = 800000; // Customer Id Max

    getRandomNumberBetween(min: number,max: number){
      return Math.floor(Math.random()*(max-min+1)+min);
    }
    
    getAccountInformation()
    {
      let accountInfo : UserAccount ={
        accountnumber : this.GenerateAccountNumber(10),
        accounttype : this.customerAccount.accounttype,
        accountstatus : 'Active',
        balance : this.customerAccount.balance
      }
     return this.accountData.push(accountInfo);
    }

    //format: string
    GenerateAccountNumber(length: number): number {
      var randomChars = '0123456789';
      var result = '';
          for (var i = 0; i < length; i++) {
              result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
          }
          return +result;
     }

    createCustomer() {
          this.getAccountInformation();
          let customer : User = {
          customerId : this.getRandomNumberBetween(this.min, this.max),
          customerName : this.customer.customerName,
          customerAddress : this.customer.customerAddress,
          customerEmailId : this.customer.customerEmailId,
          customerPhone : this.customer.customerPhone,
          customerstatus : 'Active',
          customerAccounts : this.accountData,
          Gender : this.customer.Gender,
          password : this.customer.password,
          userType : this.customer.userType,
        };

        this.customerService.create(customer)
        .subscribe(
            response => {
                this.submitted = true;
                console.log(response);
            },
            error => {
              this.error.next(error);
        });
    }

}
