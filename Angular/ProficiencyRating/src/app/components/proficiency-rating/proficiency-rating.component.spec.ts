import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficiencyRatingComponent } from './proficiency-rating.component';

describe('ProficiencyRatingComponent', () => {
  let component: ProficiencyRatingComponent;
  let fixture: ComponentFixture<ProficiencyRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProficiencyRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProficiencyRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
