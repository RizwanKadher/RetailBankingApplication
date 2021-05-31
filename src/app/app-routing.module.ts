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
import { UserlistComponent } from './user/userlist/userlist.component';

const routes: Routes = [  
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'accountsummary', component: AccountsummaryComponent, canActivate : [AuthenticationGuard]
  , data:{role : "User"}},  
  { path: 'user', component: CreateuserComponent,canActivate : [AuthenticationGuard] , data:{role : "Admin"}},
  { path: 'usersummary', component: UserlistComponent,canActivate : [AuthenticationGuard], data:{role : "Admin"}},
  {path: 'fundtransfer', component:FundtransferComponent, canActivate:[AuthenticationGuard], data:{role : "User"}},
  { path: 'detailedstatement', component: DetailedstatementComponent , data:{role : "User"}},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
