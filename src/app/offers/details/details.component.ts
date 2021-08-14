import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  get userId(): string {
    return this.userService.userId;
  }

  editOffer = false;

  serverError = false;
  showContacts = true;
  toggleText(): void {
    this.showContacts = !this.showContacts;
  };

  constructor(private userService: UserService, private offerService: OfferService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.getSingleOffer();
  }

  getSingleOffer(): void {
    this.offer = undefined;
    const id = this.activatedRoute.snapshot.params.offerId;
    this.offerService.getOfferById(id).pipe(tap(offer => console.log(offer))).subscribe(offer => this.offer = offer);
  }

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
        console.log(err)

      }
    })
  }
  
  deleteOffer(): void {
    const id = this.activatedRoute.snapshot.params.offerId;
    this.offerService.deleteOffer(id).subscribe(() => {
      this.router.navigate(['/catalog']);
    })
  }

}
