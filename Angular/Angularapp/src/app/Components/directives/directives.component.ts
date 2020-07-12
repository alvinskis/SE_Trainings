import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  colorToggle = false;
  fontToggle = false;

  public textStyle = {
    color: 'blue',
    fontStyle: 'italic'
  };

  changeColor(): void {
    this.colorToggle = !this.colorToggle;
  }

  changeFont(): void {
    this.fontToggle = !this.fontToggle;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
