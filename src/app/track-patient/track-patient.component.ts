import { Component, OnInit } from '@angular/core';
import { UserManagementService } from 'src/app/services/user-management.service';

@Component({
  selector: 'app-track-patient',
  templateUrl: './track-patient.component.html',
  styleUrls: ['./track-patient.component.scss']
})
export class TrackPatientComponent implements OnInit {

    lat = 43.879078;
    lng = -103.4615581;
    selectedMarker;

    markers = [
      // These are all just random coordinates from https://www.random.org/geographic-coordinates/
      { lat: 22.33159, lng: 105.63233, alpha: 1 },
      { lat: 7.92658, lng: -12.05228, alpha: 1 },
      { lat: 48.75606, lng: -118.859, alpha: 1 },
      { lat: 5.19334, lng: -67.03352, alpha: 1 },
      { lat: 12.09407, lng: 26.31618, alpha: 1 },
      { lat: 47.92393, lng: 78.58339, alpha: 1 },
      {lat: 12.070097599999999, lng: 75.6493618, alpha: 1}
    ];

    addMarker(lat: number, lng: number) {
      this.markers.push({ lat, lng, alpha: 1 });
    }

    max(coordType: 'lat' | 'lng'): number {
      return Math.max(...this.markers.map(marker => marker[coordType]));
    }

    min(coordType: 'lat' | 'lng'): number {
      return Math.min(...this.markers.map(marker => marker[coordType]));
    }

    selectMarker(event) {
      this.selectedMarker = {
        lat: event.latitude,
        lng: event.longitude
      };
    }

  constructor(
    private userManagementService: UserManagementService
  ) { }

  ngOnInit() {
    this.listUser();
  }

  listUser() {

    this.userManagementService.listUser().subscribe(
      (data: any) => {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            let lat = Number(data[index].latitude);
            let lng = Number(data[index].longitude);
            this.markers.push({ lat, lng, alpha: 1 });
        }
        console.log(this.markers);
      },
      error => {
        console.log(error);
      }
    );

  }



}
