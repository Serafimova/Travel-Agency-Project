import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { IOffer } from 'src/app/shared/interfaces';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  offers: IOffer[] | undefined;

  constructor(private offerService: OfferService) {
    this.getOffers();
  }

  getOffers(): void {
    this.offers = undefined;
    this.offerService.getAllOffers().pipe(tap(offers=>console.log(offers))).subscribe(offers => this.offers = offers)
  }

}
