import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEngineeringLevelsComponent } from './software-engineering-levels.component';

describe('SoftwareEngineeringLevelsComponent', () => {
  let component: SoftwareEngineeringLevelsComponent;
  let fixture: ComponentFixture<SoftwareEngineeringLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareEngineeringLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareEngineeringLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
