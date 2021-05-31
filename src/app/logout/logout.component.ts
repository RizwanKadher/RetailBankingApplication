import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authservice : AuthenticationService, private router : Router) { }

  ngOnInit(): void {
    this.authservice.logout();
    alert("Thanks for using this ABCRetailBanking. Kindly close the browser window for security Reasons.");
    window.location.href='./home';
  }
}
