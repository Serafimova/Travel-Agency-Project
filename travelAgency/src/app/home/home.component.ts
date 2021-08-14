import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { OfferService } from '../offers/offer.service';
import { IOffer } from '../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  offers: IOffer[] | undefined;

  constructor(private router: Router, private offerService: OfferService) {
    this.getOffers();
  }

  getOffers(): void {
    this.offers = undefined;
    this.offerService.getAllOffers().subscribe(offers => this.offers = offers)
  }

  searchResult: any[] | undefined;

  search(countryInput: HTMLInputElement, transportInput: HTMLInputElement): void {
    this.searchResult = undefined;
    if (countryInput.value == '' && transportInput.value == '') {
      this.router.navigate(['/catalog'])
    } else if (countryInput.value !== '' && transportInput.value == '') {
      this.searchResult = this.offers!.filter(x => x.country == countryInput.value);
    } else if (countryInput.value == '' && transportInput.value !== '') {
      this.searchResult = this.offers!.filter(x => x.transport == transportInput.value);
    } else if (countryInput.value != '' && transportInput.value != '') {
      this.searchResult = this.offers!.filter(x => x.country == countryInput.value).filter(x => x.transport == transportInput.value);
    }
    countryInput.value = '';
    transportInput.value = '';
  }
}