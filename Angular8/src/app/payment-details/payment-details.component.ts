import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: []
})
export class PaymentDetailsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('token') == null) {
      this.router.navigateByUrl('/user/login');
    }
  }
}
