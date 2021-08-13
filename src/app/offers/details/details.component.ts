import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { IOffer } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  offer: IOffer | undefined;

  get userRole(): boolean {
    return this.userService.user?.userRole === 'Agent';
  }

  get userId(): string{
    return this.userService.userId;
  }

  editOffer = false;

  serverError = false;
  showContacts = true;
  toggleText(): void {
    this.showContacts = !this.showContacts;
  };

  constructor(private userService: UserService, private offerService: OfferService, private activatedRoute: ActivatedRoute) {
    this.getSingleOffer();
    //this.editCurrentOffer();
  }

  getSingleOffer(): void {
    this.offer = undefined;
    const id = this.activatedRoute.snapshot.params.offerId;
    this.offerService.getOfferById(id).pipe(tap(offer => console.log(offer))).subscribe(offer => this.offer = offer);
  }



  // editCurrentOffer(form: NgForm): void {
  //   if (form.invalid) { return };

  //   const { days, price, description } = form.value;
  //   this.offerService.editOffer({ days, price, description }, this.userId).subscribe({
  //     next: () => {
  //      this.editOffer = false;
  //     },
  //     error: (err) => {
  //       console.log(err)

  //     }
  //   })
  // }





}
