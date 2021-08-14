import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { OfferService } from 'src/app/offers/offer.service';
import { IOffer, IUser } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {

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

  constructor(private userService: UserService, private offerService: OfferService) {
    this.getUserInfo();
  }
}