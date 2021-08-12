import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IOffer } from '../shared/interfaces';

const apiURL = environment.apiUrl;

@Injectable()
export class OfferService {

  constructor(private http: HttpClient) { }

  getAllOffers() {
    return this.http.get<IOffer[]>(`${apiURL}/offers`, { withCredentials: true });
  }

  getOfferById(id: string) {
    return this.http.get<IOffer>(`${apiURL}/offers/${id}`, { withCredentials: true });
  }

  createOffer(offerData: any) {
    return this.http.post<IOffer>(`${apiURL}/offers`, offerData, { withCredentials: true });
  }

}
