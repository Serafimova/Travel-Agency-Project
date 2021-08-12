import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private router: Router, private offerService: OfferService) { }

  createNewOffer(form: NgForm): void {
    if (form.invalid) { return };
    console.log('form', form)
    this.offerService.createOffer(form.value).subscribe({
      next: () => {
        this.router.navigate(['/catalog']);
      },
      error: (err) => {
        console.log('err', (err));
      }
    })
  }

}
