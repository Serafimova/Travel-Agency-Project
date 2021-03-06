import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReservationsComponent } from './reservations/reservations.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { MyOffersComponent } from './my-offers/my-offers.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ReservationsComponent,
    MyOffersComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
