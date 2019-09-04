import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  readonly BaseURI = 'http://localhost:53657/api';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group(
      {
        Password: ['', [Validators.required, Validators.minLength(6)]],
        ConfirmPassword: ['', Validators.required]
      },
      {
        validators: this.comparePasswords
      }
    )
  });

  comparePasswords(fb: FormGroup) {
    const confirmPasswordCtrl = fb.get('ConfirmPassword');
    if (
      confirmPasswordCtrl.errors == null ||
      'passwordMismatch' in confirmPasswordCtrl.errors
    ) {
      if (fb.get('Password').value !== confirmPasswordCtrl.value) {
        confirmPasswordCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordCtrl.setErrors(null);
      }
    }
  }

  register() {
    const body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }
}
