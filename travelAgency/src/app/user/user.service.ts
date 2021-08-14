import { Inject, Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { LocalStorage } from '../core/injectionToken';

const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: IUser | undefined;

  get isLoggedUser(): boolean {
    return !!this.user;
  }

  get role(): string {
    return this.user!.userRole;
  }

  get userId(): string {
    return this.user!._id;
  }

  constructor(private http: HttpClient, @Inject(LocalStorage) private localStorage: Window['localStorage']) {
    try {
      const localStorageUser = this.localStorage.getItem('USER') || 'ERROR';
      this.user = JSON.parse(localStorageUser);
    } catch {
      this.user = undefined;
    };

  }

  register(inputData: { username: string; email: string; password: string; userRole: string }) {
    return this.http.post<IUser>(`${apiURL}/register`, inputData, { withCredentials: true })
      .pipe(tap((user) => { this.user = user; this.localStorage.setItem('USER', JSON.stringify(this.user)) }));

  }

  login(inputData: { email: string, password: string }) {
    const loggedUser = this.http.post<IUser>(`${apiURL}/login`, inputData, { withCredentials: true })
      .pipe(tap(user => { this.user = user; this.localStorage.setItem('USER', JSON.stringify(this.user)) }));
    return loggedUser;
  }

  editProfile(inputData: { username: string, email: string }) {
    const loggedUser = this.http.put<IUser>(`${apiURL}/users/profile`, inputData, { withCredentials: true })
      .pipe(tap(user => { this.user = user; }));
    return loggedUser;
  }

  getUserProfile() {
    const loggedUser = this.http.get<IUser>(`${apiURL}/users/profile`, { withCredentials: true })
      .pipe(tap(user => { this.user = user; }));
    return loggedUser;
  }

  logout() {
    return this.http.post<IUser>(`${apiURL}/logout`, {}, { withCredentials: true }).pipe(
      tap(() => { this.user = undefined; this.localStorage.removeItem('USER') })
    );
  }
}
