import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { IQuestion } from '../shared/interfaces/faq';
import { UserService } from '../user/user.service';
import { FaqService } from './faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  questions: IQuestion[] | undefined;

  get userRole(): boolean {
    return this.userService.user?.userRole === 'Agent';
  }

  addNew = false;

  constructor(private faqService: FaqService, private router: Router, private userService: UserService) {
    this.getQuestions();
  }
 

  getQuestions(): void {
    this.questions = undefined;
    this.faqService.getAllQuestions().pipe(tap(questions => console.log(questions))).subscribe(questions => this.questions = questions)
  }

  createNewQuestion(form: NgForm): void {
    if (form.invalid) { return };
    this.faqService.createQuestion(form.value).subscribe({
      next: () => {
        this.addNew = false;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/faq']);
      });
      },
      error: (err) => {
        console.log('err', (err));
      }
    })
  }
}
