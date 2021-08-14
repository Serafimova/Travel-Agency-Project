import { Component} from '@angular/core';

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
  offers: IOffer | undefined

  constructor(private userService: UserService, private offerService: OfferService) { 
   // this.getOffersByUserId()
  }


  
  // getOffersByUserId(): void {
  //   const id = this.userService.userId;
  //    this.offerService.getOfferByUser(id).pipe(tap(offers=>console.log(offers))).subscribe(offers => this.offers = offers)
  //  }

}
