import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IOffer } from '../shared/interfaces';

const apiURL = environment.apiUrl;

@Injectable()
export class OfferService {

  offer: IOffer | undefined;

  get owner(): string {
    return this.offer!.userId._id;
  }

  constructor(private http: HttpClient) { }

  getAllOffers() {
    return this.http.get<IOffer[]>(`${apiURL}/offers`, { withCredentials: true });
  }

  getOfferById(id: string) {
    return this.http.get<IOffer>(`${apiURL}/offers/${id}`, { withCredentials: true });
  }

  createOffer(offerData: object) {
    return this.http.post<IOffer>(`${apiURL}/offers`, offerData, { withCredentials: true });
  }

  editOffer(id: string, offerData: any) {
    return this.http.put<IOffer>(`${apiURL}/offers/${id}`, offerData, { withCredentials: true })
      .pipe(tap(offer => this.offer = offer));
  }

  deleteOffer(id: string) {
    return this.http.delete<IOffer>(`${apiURL}/offers/${id}`, { withCredentials: true })
      .pipe(tap(offer => this.offer = undefined));
  }

  bookOffer(id: string) {
    return this.http.put<IOffer>(`${apiURL}/offers/${id}/book`, { withCredentials: true })
  }
}