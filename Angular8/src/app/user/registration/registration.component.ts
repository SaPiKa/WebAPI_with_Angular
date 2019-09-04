import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {
  constructor(public service: UserService) {}

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.Succeeded) {
          this.service.formModel.reset();
        } else {
          res.Errors.forEach(element => {
            switch (element.Code) {
              case 'DuplicateUserName':
                console.log(element.Description);
                break;
              default:
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
