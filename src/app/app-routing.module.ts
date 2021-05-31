import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { DetailedstatementComponent } from './detailedstatement/detailedstatement.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { LayoutComponent } from './user/layout/layout.component';
import { UserlistComponent } from './user/userlist/userlist.component';

const routes: Routes = [  
  { path: 'home-component', component: HomeComponent},
  { path: 'login-component', component: LoginComponent},
  { path: 'logout-component', component: LogoutComponent},
  { path: 'account-summary-component', component: AccountsummaryComponent, canActivate : [AuthenticationGuard]
  , data:{role : "User"}},  
  { path: 'customer-component', component: CreateuserComponent,canActivate : [AuthenticationGuard] , data:{role : "Admin"}},
  { path: 'customersummary-component', component: UserlistComponent,canActivate : [AuthenticationGuard], data:{role : "Admin"}},
  {path: 'fundtransfer-component', component:FundtransferComponent, canActivate:[AuthenticationGuard], data:{role : "User"}},
  { path: 'detailed-statement-component', component: DetailedstatementComponent , data:{role : "User"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
