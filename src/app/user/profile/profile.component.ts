import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  editProfile = false;

  constructor(private userService: UserService) { }

  serverError = false;

  editUserProfile(form: NgForm): void {
    if (form.invalid) { return };
    const { username, email } = form.value;
    this.userService.editProfile({ username, email }).subscribe({
      next: () => {
        this.editProfile = false;
      },
      error: (err) => {
        console.log(err)
        if (err.statusText === "Not Found") {
          this.editProfile = false;
          this.serverError = true;
        }
      }
    })
  }
}
