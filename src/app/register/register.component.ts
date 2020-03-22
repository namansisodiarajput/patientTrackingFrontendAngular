import { Component, OnInit } from '@angular/core';
import { UserManagementService } from 'src/app/services/user-management.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegistrationDetail = {
    name: '',
    address: '',
    mobileNumber: '',
    emailId: '',
    password: '',
    latitude: '',
    longitude: ''
  };

  constructor(
    private userManagementService: UserManagementService,
    private localStorage: LocalStorage,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
       this.userManagementService.registerUser(this.userRegistrationDetail).subscribe(
        data => {
          console.log(data);
          this.localStorage.setItem('userDetails', data).subscribe(() => {
            this.goToHome();
          },
          error => {
            console.error(error);
          });
        },
        error => {
          console.log(error);
          // this.registrationSuccess = false;
          // this.registrationFailureError = error.error.message;
          // console.error(this.registrationFailureError);
          // this.loading = false;
        }
      );
    }

    goToHome = function () {
      this.router.navigateByUrl('home');
    };

}
