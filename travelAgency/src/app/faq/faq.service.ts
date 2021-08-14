import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IQuestion } from '../shared/interfaces/faq';
import { UserService } from '../user/user.service';

const apiURL = environment.apiUrl;

@Injectable()
export class FaqService {

faq: IQuestion | undefined;

  constructor(private http: HttpClient, private userService: UserService) { }

  getAllQuestions(){
    return this.http.get<IQuestion[]>(`${apiURL}/faq`)
  }

  createQuestion(questionData: any) {
    return this.http.post<IQuestion>(`${apiURL}/faq`, questionData, { withCredentials: true });
  }
}