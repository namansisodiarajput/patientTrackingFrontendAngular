import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { UserManagementService } from 'src/app/services/user-management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
    private localStorage: LocalStorage,
    private router: Router,
    private userManagementService: UserManagementService,
  ) { }

  ngOnInit() {
  }

  getLocation() {

    if (navigator)
     {
       navigator.geolocation.getCurrentPosition( pos => {
         this.userRegistrationDetail.latitude = pos.coords.latitude.toString();
         this.userRegistrationDetail.longitude = pos.coords.longitude.toString();
         this.savePosition();
       });
     }
  }

  savePosition() {
    this.localStorage.getItem('userDetails').subscribe((userData: any) => {
      console.log(userData);
      this.userManagementService.saveUserPosition(this.userRegistrationDetail,userData.id).subscribe(
        (data: any) => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    },
    error => {
      console.log(error);
   });
  }


  goToTrackPatient = function () {
    this.router.navigateByUrl('track-patient');
  };

  logout() {
    this.localStorage.clear().subscribe(() => { });
    this.router.navigate(['/register']);
  }


}
