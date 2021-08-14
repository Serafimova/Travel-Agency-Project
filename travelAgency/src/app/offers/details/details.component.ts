import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FaqService } from 'src/app/faq/faq.service';
import { IOffer, IUser } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  offer: IOffer | undefined;
  user: IUser | undefined;

  get userRole(): boolean {
    return this.userService.user?.userRole === 'Agent';
  }

  get isOwner(): boolean {
    return this.userService.userId == this.offer?.userId?._id;
  }

  
 
  id = this.activatedRoute.snapshot.params.offerId;
  constructor(private userService: UserService, private offerService: OfferService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
     
      console.log(this.userService.user)
      console.log(this.offerService.offer)

  

    this.getSingleOffer();
  }
  getSingleOffer(): void {
    this.offer = undefined;
    const id = this.activatedRoute.snapshot.params.offerId;
    this.offerService.getOfferById(id).subscribe(offer => this.offer = offer);
    return this.offer;
  }

  editOffer = false;
  showContacts = true;
  toggleText(): void {
    this.showContacts = !this.showContacts;
  };

  unauthorized = false;
  editCurrentOffer(form: NgForm): void {
    if (form.invalid) { return };
    const { days, price, description } = form.value;
    const id = this.activatedRoute.snapshot.params.offerId;
    this.offerService.editOffer(id, { days, price, description }).subscribe({
      next: () => {
        this.editOffer = false;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/catalog/${id}`]);
        });
      },
      error: (err) => {
        if (err.statusText === "Unauthorized") {
          this.unauthorized = true;
          this.editOffer = false;
          this.router.navigate([`/catalog/${id}`]);
        }
      }
    })
  }

  get isBooked(): boolean {
    return !!this.userService.user?.booked.filter(x=>x._id==this.offerService.offer?._id)
  }

  bookOffer(): void {
    const currentUserId = this.userService.user!._id;
    const id = this.activatedRoute.snapshot.params.offerId;
    if (this.userService.user?.booked.filter(x=>x._id===this.offerService.offer?._id)) {
    //  this.isBooked = true;
      return;
    }

    this.offerService.bookOffer(id).subscribe({
      next: () => {
      ///  this.isBooked = true
      },
      error: (err) => {
        console.log(err.message);
      }
    })
  }

  deleteOffer(): void {
    const id = this.activatedRoute.snapshot.params.offerId;
    this.offerService.deleteOffer(id).subscribe({
      next: () => {
        this.router.navigate(['/catalog'])
      },
      error: (err) => {
        if (err.statusText === "Unauthorized") {
          this.unauthorized = true;
        }
      }
    })
  }
}