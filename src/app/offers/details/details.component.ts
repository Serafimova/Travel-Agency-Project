import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  get userRole(): boolean {
    return this.userService.user?.userRole === 'Agent';
  }

  editOffer = false;

  constructor(private userService: UserService) { }
  
  
  serverError = false;
  showContacts = true;
  toggleText(): void {
    this.showContacts = !this.showContacts;

  };

}
