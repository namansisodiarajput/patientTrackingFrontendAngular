import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserManagementService } from 'src/app/services/user-management.service';
import { StorageModule } from '@ngx-pwa/local-storage';
import { FormsModule } from '@angular/forms';
import { TrackPatientComponent } from './track-patient/track-patient.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    TrackPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBjCuIPfMT4AZjx4MDPGCJ0yxPGe0xKr6s'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    }),
    StorageModule.forRoot({ IDBNoWrap: true })
  ],
  providers: [
    UserManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
