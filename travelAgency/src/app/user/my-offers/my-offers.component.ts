import { Component} from '@angular/core';
import { tap } from 'rxjs/operators';
import { OfferService } from 'src/app/offers/offer.service';
import { IOffer, IUser } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.scss']
})
export class MyOffersComponent {

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

  constructor(private userService: UserService, private offerService: OfferService) {
    this.getUserInfo();
    this.offers?.map(o => console.log('offername', o.offerName))
  }



  
}
