import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {

  customerdetails: any[];
  LoggedInEmailID : string ='';
  visible:boolean = false;
  constructor(private customerService : UserService) { }
  
  ngOnInit(): void {
    this.readAllCustomers();
  }

  readAllCustomers(){
    this.customerdetails=[];
    this.LoggedInEmailID = localStorage.getItem("LoggedInEmailID").toString();
      this.customerService.getcustomerDetails(this.LoggedInEmailID)
      .subscribe((resp:any) => {
            (error: any) => console.log(error);
              for (const data of resp) {
                  this.customerdetails.push(data);
              }
            console.log(this.customerdetails);
          });
  }

  showhideMinistatementComponenet()
  {
    this.visible = this.visible ? false : true;
  }

}
