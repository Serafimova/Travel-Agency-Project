import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { StorageService } from '../core/storage.service';


const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: IUser | null | undefined = undefined;

  isLoggedUser: boolean;



  userData = {};

  constructor(private http: HttpClient, private localStorageService: StorageService) {

    this.isLoggedUser = this.localStorageService.getItem('USER') !== null;
  }

  register(inputData: { username: string; email: string; password: string; userRole: string }) {
    return this.http.post<IUser>(`${apiURL}/register`, inputData, { withCredentials: true })
      .pipe(tap((user) => { this.user = user; this.isLoggedUser = true }));

  }

  login(inputData: { email: string, password: string }) {
    const loggedUser = this.http.post<IUser>(`${apiURL}/login`, inputData, { withCredentials: true })
      .pipe(tap(user => { this.user = user; this.isLoggedUser = true; }));
    return loggedUser;
  }

  logout() {
    return this.http.post<IUser>(`${apiURL}/logout`, {}, { withCredentials: true }).pipe(
      tap(() => { this.user = null; this.isLoggedUser = false; })
    );
  }
}
