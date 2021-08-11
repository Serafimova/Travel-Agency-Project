import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: IUser | null | undefined = undefined;
  

  get isLoggedUser(): boolean {
    return this.userService.isLoggedUser;
  }
  
  get userRole():boolean {
    return this.userService.user?.userRole==='Agent';
  }

  get role(): string {
    return this.userService.user!.userRole;
  }

  get userUsername(): string {
    return this.userService.user?.username || '';
  }

  constructor(private userService: UserService, private router: Router) {
    
  }

  logout(): void {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/'])
    })
  }

}
