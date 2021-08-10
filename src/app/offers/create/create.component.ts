import { Component, OnInit } from '@angular/core';
import { URLValidator } from 'src/app/shared/validations';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {


  URLValidator = URLValidator;

  constructor() { }

  ngOnInit(): void {
  }

}
