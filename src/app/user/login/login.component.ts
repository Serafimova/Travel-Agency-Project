import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }



  wrong = false;
  login(form: NgForm): void {
    if (form.invalid) { return };
    const { email, password } = form.value;
    this.userService.login({ email, password }).subscribe({
      next: () => {
      console.log(this.userService.user?.userRole)
        this.router.navigate(['/catalog'])
      },
      error: (err) => {
        if (err.statusText === "Unauthorized") {
          this.wrong = true;
        }
      }
    })
  }
}
