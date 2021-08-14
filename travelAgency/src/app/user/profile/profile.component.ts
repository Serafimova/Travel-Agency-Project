import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { OfferService } from 'src/app/offers/offer.service';
import { IOffer, IUser } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user: IUser | undefined;
  offers: IOffer[] | undefined

  getUserInfo(): void {
    this.user = undefined;
    this.userService.getUserProfile().pipe(tap(user => console.log(user))).subscribe(user => this.user = user);
  }

  get userOffers(): any {
    return this.user?.offers;
  }

  get hasOffers(): boolean{
    return this.userService.user?.offers.length==0;
  }

  get isLoggedUser(): boolean {
    return this.userService.isLoggedUser;
  }

  get userRole(): boolean {
    return this.userService.user?.userRole === 'Agent';
  }

  editProfile = false;

  constructor(private userService: UserService, private offerService: OfferService, private router: Router) {
    this.getUserInfo();
   // this.offers?.map(o => console.log('offername', o.offerName))
  }

  serverError = false;

  editUserProfile(form: NgForm): void {
    if (form.invalid) { return };

    const { username, email } = form.value;
    this.userService.editProfile({ username, email }).subscribe({
      next: () => {
        this.editProfile = false;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/user/profile']);
      });
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
