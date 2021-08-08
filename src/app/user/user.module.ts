import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReservationsComponent } from './reservations/reservations.component';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
