import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register(form: NgForm): void {
    if (form.invalid) { return };
    const { userRole, username, email, password } = form.value;
    this.userService.register(form.value).subscribe({
      next: () => {
        this.router.navigate(['/catalog']);
      },
      error: (err) => {
        console.log(err);
        //this error to handle
        if (err.statusText === "Not Found") {
          this.router.navigate(['**']);
        }
      }
    })
  }
}