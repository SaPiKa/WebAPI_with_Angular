import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';
import { UserComponent } from '../user/user.component';
import { RegistrationComponent } from '../user/registration/registration.component';
import { LoginComponent } from '../user/login/login.component';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'payment-details',
    component: PaymentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
