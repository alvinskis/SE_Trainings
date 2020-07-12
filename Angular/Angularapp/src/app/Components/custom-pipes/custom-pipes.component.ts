import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent implements OnInit {
  message = 'Add text here!!!';
  numberValue: number = 0;
  powerValue: number = 0;
  result: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
