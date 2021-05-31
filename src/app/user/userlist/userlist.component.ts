import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  //customerdetails: any[];
  customerdetails : any[]=[];
  customerdetails2 : any[]=[];
  filteredcustomerdetails: any[];
  filteredCustomerID = '';
  cusName : string;
  accNum : string;
  acctype : string;
  constructor(private customerService : UserService) { }

  ngOnInit(): void {
    this.readAllCustomers();
  }

  readAllCustomers(){
      this.customerdetails=[];
      this.customerService.getCustomerDetails()
      .subscribe((resp:any) => {
            (error: any) => console.log(error);
            if(resp.length > 0)
            {
              for (const data of resp) {
                  this.customerdetails.push(data);
              }
            }
            this.customerdetails2 = this.customerdetails;
            console.log(this.customerdetails);
            console.log(this.customerdetails2);
            
            localStorage.setItem("cusDetails", JSON.stringify(this.customerdetails2));

          });
  }

  SearchUserAccount()  {

    this.filteredcustomerdetails = [];
    this.customerdetails = JSON.parse(localStorage.getItem("cusDetails"));
    //this.readAllCustomers();

    if(this.cusName !== null && this.accNum !==null && this.acctype !== null)
    {

      for(const cusdata of this.customerdetails)
      {
        for (const accountdata of cusdata.customerAccounts)
        {
          if(cusdata.customerName === this.cusName && this.accNum === accountdata.accountnumber.toString() && this.acctype === accountdata.accounttype)
          {
            this.filteredcustomerdetails.push(cusdata);
          }         
        } 
      }
      this.customerdetails = [];
      this.customerdetails = this.filteredcustomerdetails;
    }
  }

}
