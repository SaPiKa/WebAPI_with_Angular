import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: boolean;
  constructor(private router: Router) {}

  ngOnInit() {}

  isLogged() {
    if (localStorage.getItem('token') != null) {
      return (this.logged = true);
    }
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
    this.logged = false;
  }
}
