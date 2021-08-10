import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  get user() {
    return this.userService.user;
  }
  get isLoggedUser(): boolean {
    return this.userService.isLoggedUser;
  }


  get userRole(): boolean {
    return this.userService.user?.userRole === 'Agent';
  }

  constructor(private userService: UserService) { }



}
