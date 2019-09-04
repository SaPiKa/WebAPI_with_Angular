import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './shared/payment-detail.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PaymentDetailService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
