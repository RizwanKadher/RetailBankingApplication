import { NgModule } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { MinistatementComponent } from './ministatement/ministatement.component';
import { DetailedstatementComponent } from './detailedstatement/detailedstatement.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { FilterPipe } from './pipes/filter.pipe';


import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { TransactionService } from './services/transaction.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    CreateuserComponent,
    UserlistComponent,
    AccountsummaryComponent,
    MinistatementComponent,
    DetailedstatementComponent,
    FundtransferComponent,
    FilterPipe,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [UserService, TransactionService, AuthenticationService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
