import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proficiency-rating',
  templateUrl: './proficiency-rating.component.html',
  styleUrls: ['./proficiency-rating.component.scss']
})
export class ProficiencyRatingComponent implements OnInit {
  public proficiencyRating: string;
  constructor() { }

  ngOnInit(): void {
  }
}
